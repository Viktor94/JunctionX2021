package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.services.users.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<?> addUser(@RequestBody Patient patient) {
    patient.setQuestions(null);
    userService.save(patient);
    return ResponseEntity.ok().build();
  }

  @GetMapping("/{userID}")
  public ResponseEntity<Patient> getPatient(@PathVariable Long userID) {
    Patient patient = (Patient) userService.getById(userID);

    return ResponseEntity.ok(patient);
  }

  @GetMapping("/patients")
  public ResponseEntity<List<Patient>> getAllPatients() {
    return ResponseEntity.ok(userService.getAllPatient());
  }
}
