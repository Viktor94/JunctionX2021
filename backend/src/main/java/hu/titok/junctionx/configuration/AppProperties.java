package hu.titok.junctionx.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(prefix = "app")
public class AppProperties {
  private final Email email = new Email();

  @Getter
  @Setter
  public static final class Email {
    private String senderEmail;
    private String emailUsername;
    private String emailPassword;
  }
}
