package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface RegistrationTokenRepository extends CrudRepository<RegistrationToken, Long> {

  Optional<RegistrationToken> findByToken(String token);

  Optional<RegistrationToken> findByUser(User user);

  void deleteAllByExpirationTimeBefore(LocalDateTime time);
}
