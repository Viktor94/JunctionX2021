package hu.titok.junctionx.services.token;

import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.exceptions.InvalidTokenException;

import java.util.Optional;

public interface TokenService<T> {

  T saveToken(T token);

  void deleteToken(Long id);

  T findByToken(String token) throws InvalidTokenException;

  Optional<T> findByUser(User user);
}
