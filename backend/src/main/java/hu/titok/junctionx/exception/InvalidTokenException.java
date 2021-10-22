package hu.titok.junctionx.exception;

import org.springframework.http.HttpStatus;


public class InvalidTokenException extends AppException  {
    public InvalidTokenException(AppErrorCode errorCode) {
        super(errorCode);
    }
}
