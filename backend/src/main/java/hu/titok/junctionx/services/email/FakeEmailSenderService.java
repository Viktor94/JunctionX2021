package hu.titok.junctionx.services.email;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@Profile("dev")
public class FakeEmailSenderService implements EmailSenderService {
    @Override
    public void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken) {

    }

    @Override
    public void sendNotificationEmail(Locale locale, User user, List<String> messages) {

    }
}
