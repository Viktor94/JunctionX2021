package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.pojos.StatusReport;

import java.util.List;

public interface AlarmProcessService {
  List<StatusReport> manageSymptom(User user, List<Question> questions);
}
