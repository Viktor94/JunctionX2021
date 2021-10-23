package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.AlarmProcess;
import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.domains.enums.QuestionType;
import hu.titok.junctionx.pojos.StatusReport;
import hu.titok.junctionx.repositories.AlarmProcessRepository;
import hu.titok.junctionx.services.answers.AnswerService;
import hu.titok.junctionx.services.email.EmailSenderService;
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
    
    @Override
    public List<StatusReport> manageSymptom(User user, List<Answer> answers) {
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
                        // things to do
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
        if (isEmailRequired) {
            emailSenderService.sendNotificationEmail(
                    Locale.ENGLISH,
                    user,
                    statusReports.stream().map(StatusReport::getMessage).collect(Collectors.toList()));
            log.info("Email sent!");
        }
        if (shouldRaisePatientPriority) {
            // todo raise patient priority
        }
        
        return statusReports;
    }
}
