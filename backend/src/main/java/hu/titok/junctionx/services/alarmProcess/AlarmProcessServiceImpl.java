package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.*;
import hu.titok.junctionx.domains.enums.Priority;
import hu.titok.junctionx.domains.enums.QuestionType;
import hu.titok.junctionx.domains.enums.Urgency;
import hu.titok.junctionx.pojos.StatusReport;
import hu.titok.junctionx.repositories.AlarmProcessRepository;
import hu.titok.junctionx.services.answers.AnswerService;
import hu.titok.junctionx.services.email.EmailSenderService;
import hu.titok.junctionx.services.users.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmProcessServiceImpl implements AlarmProcessService {
    
    private final AlarmProcessRepository alarmProcessRepository;
    private final EmailSenderService emailSenderService;
    private final AnswerService answerService;
    private final UserService userService;
    
    @Override
    public List<StatusReport> manageSymptoms(User user, List<Answer> answers, StatusReport bloodPressureStatus) {
        List<StatusReport> statusReports = new ArrayList<>();
        boolean isEmailRequired = false;
        boolean shouldRaisePatientPriority = false;
        for (var answer : answers) {
            var question = answer.getQuestion();
            var questionType = question.getQuestionType();
            AlarmProcess alarmProcess = null;
            var symptomFrequency = 0;
            if (QuestionType.TEXT.equals(questionType)) continue;
            if (QuestionType.YES_NO.equals(questionType)) {
                symptomFrequency = answerService.countSignificantYesNoAnswers(
                        true, user.getId(), question.getCancerType(), question.getSymptomType());
            } else if (QuestionType.NUMERIC.equals(questionType)) {
                symptomFrequency = answer.getNumericResponse();
            }
            alarmProcess = alarmProcessRepository.findByCancerTypeAndSymptomTypeAndFrequency(
                    question.getCancerType(), question.getSymptomType(), symptomFrequency);
            if (alarmProcess == null) continue;
            for (var instruction : alarmProcess.getInstructions()) {
                switch (instruction) {
                    case SEND_EMAIL:
                        // send email
                        isEmailRequired = true;
                        break;
                    case GIVE_ADVICE:
                        if (StringUtils.isNotBlank(alarmProcess.getAdvice())) {
                            statusReports.add(new StatusReport(alarmProcess.getUrgency(), alarmProcess.getAdvice()));
                        }
                        break;
                    case NOTIFY_CARE_TEAM:
                        shouldRaisePatientPriority = true;
                        break;
                    case NOTIFY_RELATIVE:
                        // things to do
                        break;
                    default:
                        break;
                }
            }
        }
        if (bloodPressureStatus != null) {
            if (bloodPressureStatus.getUrgency().equals(Urgency.HIGH)) {
                isEmailRequired = true;
                shouldRaisePatientPriority = true;
            }
            statusReports.add(bloodPressureStatus);
        }
        if (isEmailRequired) {
            emailSenderService.sendNotificationEmail(
                    Locale.ENGLISH,
                    user,
                    statusReports.stream().map(StatusReport::getMessage).collect(Collectors.toList()));
            log.info("Email sent!");
            if (statusReports.isEmpty())
                statusReports.add(new StatusReport(Urgency.LOW, "An email was sent to your care team and close relatives!"));
        }
        if (shouldRaisePatientPriority) {
            var patient = (Patient) user;
            patient.setPriority(Priority.HIGH);
            userService.save(patient);
            if (statusReports.isEmpty())
                statusReports.add(new StatusReport(Urgency.MEDIUM, "Your care team has been notified!"));
        }
        if (statusReports.isEmpty())
            statusReports.add(new StatusReport(Urgency.LOW, "No immediate action is necessary!"));
        return statusReports;
    }
}
