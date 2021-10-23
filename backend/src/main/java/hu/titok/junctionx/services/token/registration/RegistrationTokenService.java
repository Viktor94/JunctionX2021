package hu.titok.junctionx.services.token.registration;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.exceptions.AppErrorCode;
import hu.titok.junctionx.exceptions.InvalidTokenException;
import hu.titok.junctionx.repositories.RegistrationTokenRepository;
import hu.titok.junctionx.services.token.TokenService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class RegistrationTokenService implements TokenService<RegistrationToken> {

  private final RegistrationTokenRepository regTokenRepo;

  @Autowired
  public RegistrationTokenService(RegistrationTokenRepository regTokenRepo) {
    this.regTokenRepo = regTokenRepo;
  }

  @Override
  public RegistrationToken saveToken(RegistrationToken token) {
    return regTokenRepo.save(token);
  }

  @Override
  public void deleteToken(Long id) {
    regTokenRepo.deleteById(id);
  }

  @Override
  public RegistrationToken findByToken(String token) throws InvalidTokenException {
    if (StringUtils.isBlank(token)) {
      throw new InvalidTokenException(AppErrorCode.INVALID_TOKEN);
    }
    Optional<RegistrationToken> optRegToken = regTokenRepo.findByToken(token);
    if (optRegToken.isPresent()) {
      RegistrationToken pwResToken = optRegToken.get();
      if (pwResToken.isTokenExpired()) {
        throw new InvalidTokenException(AppErrorCode.TOKEN_EXPIRED);
      }
      return pwResToken;
    } else {
      throw new InvalidTokenException(AppErrorCode.INVALID_TOKEN);
    }
  }

  @Override
  public Optional<RegistrationToken> findByUser(User user) {
    return regTokenRepo.findByUser(user);
  }

  @Transactional
  @Scheduled(cron = "0 0 0 * * ?")
  public void deleteExpiredTokens() {
    regTokenRepo.deleteAllByExpirationTimeBefore(LocalDateTime.now());
  }
}
