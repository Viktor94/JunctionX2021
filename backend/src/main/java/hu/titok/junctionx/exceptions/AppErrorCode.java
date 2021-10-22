package hu.titok.junctionx.exceptions;


import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum AppErrorCode {
    EXAMPLE(HttpStatus.BAD_REQUEST, "MSG_EXAMPLE",
            "This is an example message, frontend will display a localized message based on MSG_EXAMPLE."),
    INVALID_TOKEN(HttpStatus.BAD_REQUEST, "INVALID_TOKEN", "The provided token is invalid!"),
    TOKEN_EXPIRED(HttpStatus.BAD_REQUEST, "TOKEN_EXPIRED", "The provided token is expired!");

    private final HttpStatus httpStatus;
    private final String messageCode;
    private final String message;

    AppErrorCode(HttpStatus httpStatus, String messageCode, String message) {
        this.httpStatus = httpStatus;
        this.messageCode = messageCode;
        this.message = message;
    }
}
