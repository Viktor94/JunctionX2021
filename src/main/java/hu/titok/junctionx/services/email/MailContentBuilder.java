package hu.titok.junctionx.services.email;

import hu.titok.junctionx.constant.AppConstants;
import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.List;

@Service
public class MailContentBuilder {
  private static final String REGISTRATION_MIDDLE_URL = "/auth/register?token=";

  private final TemplateEngine templateEngine;

  @Autowired
  public MailContentBuilder(TemplateEngine templateEngine) {
    this.templateEngine = templateEngine;
  }

  public String generateRegistrationEmail(RegistrationToken registrationToken) {
    var context = new Context();
    context.setVariable("name", registrationToken.getUser().getFullName());
    var sb = new StringBuilder();
    sb.append(AppConstants.FRONTEND_BASE_URL)
        .append(REGISTRATION_MIDDLE_URL)
        .append(registrationToken.getToken());
    context.setVariable("registrationUrl", sb.toString());

    return templateEngine.process("registrationEmail", context);
  }

  public String generateNotificationEmail(User user, List<String> messages) {
    var context = new Context();
    context.setVariable("name", user.getFullName());
    var sb = new StringBuilder();
    sb.append(String.join(" ", messages));

    context.setVariable("messages", sb.toString());

    return templateEngine.process("notificationEmail", context);
  }
}
