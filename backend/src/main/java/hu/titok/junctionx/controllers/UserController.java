package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.services.users.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<?> addUser (){
    userService.save(new Patient("asd","asd","asd","asd"));

    return ResponseEntity.ok().build();
  };

  @GetMapping("/{userID}")
  public ResponseEntity<?> getCarePlanForm(@PathVariable Long userID) {
    Patient patient = (Patient) userService.getById(userID);

    return ResponseEntity.ok(patient);
  }
}
