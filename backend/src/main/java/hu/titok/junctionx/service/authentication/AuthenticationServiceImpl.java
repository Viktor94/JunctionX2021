package hu.titok.junctionx.service.authentication;

import hu.titok.junctionx.domains.RegistrationToken;
import hu.titok.junctionx.payload.RegistrationPayload;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    @Override
    public void registerUser(String registrationToken, RegistrationPayload registrationPayload) {

    }
}
