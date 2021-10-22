package hu.titok.junctionx.exception;

import org.springframework.http.HttpStatus;

public class AppException extends RuntimeException {
    private final AppErrorCode errorCode;

    public AppException(AppErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public HttpStatus httpStatus() {
        return errorCode.getHttpStatus();
    }

    public String getMessageCode() {
        return errorCode.getMessageCode();
    }
}
