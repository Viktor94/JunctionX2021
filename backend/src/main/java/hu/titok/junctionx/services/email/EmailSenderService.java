package hu.titok.junctionx.services.email;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;

import java.util.List;
import java.util.Locale;

public interface EmailSenderService {
    void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken);
    void sendNotificationEmail(Locale locale, User user, List<String> messages);
}
