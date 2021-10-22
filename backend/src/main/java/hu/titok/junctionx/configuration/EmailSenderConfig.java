package hu.titok.junctionx.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import java.util.Properties;

@Configuration
@Profile("!dev")
public class EmailSenderConfig extends WebMvcConfig {

    public static final String EMAIL_TEMPLATE_ENCODING = "UTF-8";

    @Value("${app.email.emailUsername}")
    private String senderEmailUsername;

    @Value("${app.email.emailPassword}")
    private String senderEmailPassword;

    @Bean
    public JavaMailSender javaMailSender() {
        final JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setSession(generateSession(generateGmailProperties()));
        return mailSender;
    }


    private Session generateSession(Properties props) {
        // Get the Session object.
        return Session.getInstance(
                props,
                new javax.mail.Authenticator() {
                    @Override
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(senderEmailUsername, senderEmailPassword);
                    }
                });
    }

    private Properties generateGmailProperties() {
        // Assuming you are sending email through smtp.gmail.com
        var props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        return props;
    }

    @Bean
    public ResourceBundleMessageSource emailMessageSource() {
        var messageSource = new ResourceBundleMessageSource();
        //Like: src/main/resources/mailMessages_xx_YY.properties

        messageSource.setBasename("mailMessages");
        messageSource.setDefaultEncoding(EMAIL_TEMPLATE_ENCODING);
        return messageSource;
    }

    @Bean
    public TemplateEngine emailTemplateEngine() {
        var templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(templateResolver());
        templateEngine.setTemplateEngineMessageSource(emailMessageSource());
        return templateEngine;
    }

    @Bean
    public ClassLoaderTemplateResolver templateResolver() {
        var templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("mail/html/");
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode("HTML5");
        templateResolver.setCharacterEncoding(EMAIL_TEMPLATE_ENCODING);
        return templateResolver;
    }
}
