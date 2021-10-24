package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.pojos.StatusReport;

import java.util.List;

public interface AlarmProcessService {
  List<StatusReport> manageSymptoms(Patient user, List<Answer> questions, StatusReport bloodPressureStatus);
}
