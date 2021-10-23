package hu.titok.junctionx.services.email;

import hu.titok.junctionx.configuration.AppProperties;
import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.ResourceBundle;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

  private final MailSenderHelper mailSenderHelper;
  private final MailContentBuilder mailContentBuilder;
  private final AppProperties appProperties;

  @Autowired
  public EmailSenderServiceImpl(
      MailSenderHelper mailSenderHelper,
      MailContentBuilder mailContentBuilder,
      AppProperties appProperties) {
    this.mailSenderHelper = mailSenderHelper;
    this.mailContentBuilder = mailContentBuilder;
    this.appProperties = appProperties;
  }

  @Async
  @Override
  public void sendRegistrationEmail(Locale locale, RegistrationToken registrationToken) {
    String msg = mailContentBuilder.generateRegistrationEmail(registrationToken);
    mailSenderHelper.sendComplexMail(
        new String[] {registrationToken.getUser().getEmail()},
        appProperties.getEmail().getSenderEmail(),
        getMessageByLanguage("mail.reg.subject", locale),
        msg);
  }

  @Async
  @Override
  public void sendNotificationEmail(Locale locale, User user, List<String> messages) {
    if (user instanceof Patient) {
      String msg = mailContentBuilder.generateNotificationEmail(user, messages);
      mailSenderHelper.sendComplexMail(
          new String[] {user.getEmail(), ((Patient) user).getRelativeEmail()},
          appProperties.getEmail().getSenderEmail(),
          getMessageByLanguage("mail.note.subject", locale),
          msg);
    }
  }

  private String getMessageByLanguage(String key, Locale language) {
    var bundle = ResourceBundle.getBundle("messages", language);
    return bundle.getString(key);
  }
}
