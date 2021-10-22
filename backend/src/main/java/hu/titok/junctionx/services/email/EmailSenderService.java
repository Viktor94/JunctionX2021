package hu.titok.junctionx.services.email;

import hu.titok.junctionx.domains.RegistrationToken;

import java.util.Locale;

public interface EmailSenderService {
    void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken);
}
