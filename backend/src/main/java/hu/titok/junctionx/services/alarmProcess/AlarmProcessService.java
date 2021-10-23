package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.pojos.StatusReport;

import java.util.List;

public interface AlarmProcessService {
  List<StatusReport> manageSymptoms(User user, List<Answer> questions, StatusReport bloodPressureStatus);
}
