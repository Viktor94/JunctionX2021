package hu.titok.junctionx.services.alarmProcess;

import hu.titok.junctionx.domains.Frequency;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.pojos.StatusReport;

import java.util.List;
import java.util.Locale;

public interface AlarmProcessService {
    List<StatusReport> manageSymptom(Locale locale, User user, List<Frequency> frequencies);
}
