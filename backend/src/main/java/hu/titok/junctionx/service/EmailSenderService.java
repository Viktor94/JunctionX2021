package hu.titok.junctionx.service;

public interface EmailSenderService {
    void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken);
}
