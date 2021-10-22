package hu.titok.junctionx.service.email;

import hu.titok.junctionx.configuration.AppProperties;
import hu.titok.junctionx.domains.RegistrationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;

import java.util.Locale;
import java.util.ResourceBundle;

public class EmailSenderServiceImpl implements EmailSenderService {

    private final MailSenderHelper mailSenderHelper;
    private final MailContentBuilder mailContentBuilder;
    private final AppProperties appProperties;

    @Autowired
    public EmailSenderServiceImpl(MailSenderHelper mailSenderHelper, MailContentBuilder mailContentBuilder, AppProperties appProperties) {
        this.mailSenderHelper = mailSenderHelper;
        this.mailContentBuilder = mailContentBuilder;
        this.appProperties = appProperties;
    }

    @Async
    @Override
    public void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken) {
        String msg = mailContentBuilder.generateRegistrationEmail(registrationToken);
        mailSenderHelper.sendComplexMail(new String[]{registrationToken.getUser().getEmail()}, appProperties.getEmail().getSenderEmail(),
                getMessageByLanguage("mail.reg.subject", locale), msg);
    }

    private String getMessageByLanguage(String key, Locale language) {
        var bundle = ResourceBundle.getBundle("messages", language);
        return bundle.getString(key);
    }
}
