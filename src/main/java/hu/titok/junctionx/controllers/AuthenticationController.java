package hu.titok.junctionx.controllers;

import hu.titok.junctionx.payload.RegistrationPayload;
import hu.titok.junctionx.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

  private final AuthenticationService authenticationService;

  @Autowired
  public AuthenticationController(AuthenticationService authenticationService) {
    this.authenticationService = authenticationService;
  }

  @PostMapping("/patient/register")
  public ResponseEntity<Void> registerPatient(
      @RequestParam("token") String pwResetToken,
      @Valid @RequestBody RegistrationPayload registrationPayload) {
    authenticationService.registerUser(pwResetToken, registrationPayload);
    System.out.println(pwResetToken);
    System.out.println(registrationPayload);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
