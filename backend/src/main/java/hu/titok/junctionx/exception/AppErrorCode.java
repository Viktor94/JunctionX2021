package hu.titok.junctionx.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum AppErrorCode {
    EXAMPLE(HttpStatus.BAD_REQUEST, "MSG_EXAMPLE",
            "This is an example message, frontend will display a localized message based on MSG_EXAMPLE.");

    private final HttpStatus httpStatus;
    private final String messageCode;
    private final String message;

    AppErrorCode(HttpStatus httpStatus, String messageCode, String message) {
        this.httpStatus = httpStatus;
        this.messageCode = messageCode;
        this.message = message;
    }
}
