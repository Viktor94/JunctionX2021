package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.AlarmProcess;
import hu.titok.junctionx.domains.Frequency;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.pojos.StatusReport;
import hu.titok.junctionx.repositories.AlarmProcessRepository;
import hu.titok.junctionx.services.email.EmailSenderService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlarmProcessServiceImpl implements AlarmProcessService {

    private AlarmProcessRepository alarmProcessRepository;
    private EmailSenderService emailSenderService;

    @Autowired
    public AlarmProcessServiceImpl(AlarmProcessRepository alarmProcessRepository, EmailSenderService emailSenderService) {
        this.alarmProcessRepository = alarmProcessRepository;
        this.emailSenderService = emailSenderService;
    }

    @Override
    public List<StatusReport> manageSymptom(User user, List<Frequency> frequencies) {
        List<StatusReport> statusReports = new ArrayList<>();
        for (Frequency frequency : frequencies) {
            AlarmProcess process = alarmProcessRepository.findByCancerTypeAndSymptomAndFrequency(frequency.getCancerType(), frequency.getSymptom(), frequency.getFrequency());
            switch (process.getInstructions()) {
                case SEND_EMAIL:
                    //send email
                case GIVE_ADVICE:
                    if (StringUtils.isNotBlank(process.getInstruction())) {
                        statusReports.add(new StatusReport(process.getUrgency(), process.getInstruction()));
                    }
                    // things to do
                case NOTIFY_CARE_TEAM:
                    // things to do
                case NOTIFY_RELATIVE:
                    //things to do
                default:
                    break;
            }
        }
        return statusReports;
    }
}
