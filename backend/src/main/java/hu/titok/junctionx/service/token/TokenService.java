package hu.titok.junctionx.service.token;

import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.exception.InvalidTokenException;

import java.util.Optional;

public interface TokenService<T> {

    T saveToken(T token);

    void deleteToken(Long id);

    T findByToken(String token) throws InvalidTokenException;

    Optional<T> findByUser(User user);
}
