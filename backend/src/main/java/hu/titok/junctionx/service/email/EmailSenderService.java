package hu.titok.junctionx.service.email;

import hu.titok.junctionx.domains.RegistrationToken;

import java.util.Locale;

public interface EmailSenderService {
    void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken);
}
