package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Symptom;
import hu.titok.junctionx.repositories.AlarmProcessRepository;
import hu.titok.junctionx.services.email.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public String manageSymptom(CancerType cancerType, Symptom symptom, long number) {
        return null;
    }
}
