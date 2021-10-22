package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Symptom;

public interface AlarmProcessService {
    String manageSymptom(User user, CancerType cancerType, Symptom symptom, long number);
}
