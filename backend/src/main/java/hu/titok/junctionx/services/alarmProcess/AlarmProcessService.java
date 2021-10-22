package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.Frequency;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Symptom;
import hu.titok.junctionx.pojos.StatusReport;

import java.util.List;

public interface AlarmProcessService {
    List<StatusReport> manageSymptom(User user, List<Frequency> frequencies);
}
