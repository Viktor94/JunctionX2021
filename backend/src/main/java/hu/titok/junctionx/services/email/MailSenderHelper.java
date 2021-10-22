package hu.titok.junctionx.services.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;

@Service
@Profile("!dev")
public class MailSenderHelper {

    private final Logger logger = LoggerFactory.getLogger(MailSenderHelper.class);

    private final JavaMailSender emailSender;

    @Autowired
    public MailSenderHelper(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    public void sendSimpleMail(String to, String from, String subject, String text) {
        var message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        message.setFrom(from);
        emailSender.send(message);

        logger.info("Mail sent to: {}, with subject: {}", to, subject);
    }

    @Async
    public void sendComplexMail(String[] to, String from, String subject, String text) {

        var message = emailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(message, true);

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text,true);

            emailSender.send(message);
            logger.info("Mail sent to: {}, with subject: {}", to, subject);

        } catch (MessagingException e) {
            logger.error(e.getMessage());
        }
    }
}
