package hu.titok.junctionx.exceptions;

public class InvalidTokenException extends AppException {
  public InvalidTokenException(AppErrorCode errorCode) {
    super(errorCode);
  }
}
