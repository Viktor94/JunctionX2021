package hu.titok.junctionx.services.authentication;

import hu.titok.junctionx.payload.RegistrationPayload;

public interface AuthenticationService {
    void registerUser(String registrationToken, RegistrationPayload registrationPayload);
}
