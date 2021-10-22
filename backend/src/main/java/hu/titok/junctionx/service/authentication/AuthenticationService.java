package hu.titok.junctionx.service.authentication;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.payload.RegistrationPayload;

public interface AuthenticationService {
    void registerUser(String registrationToken, RegistrationPayload registrationPayload);
}
