package hu.titok.junctionx.services.users;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.domains.User;
import hu.titok.junctionx.domains.enums.Priority;
import hu.titok.junctionx.domains.enums.Role;
import hu.titok.junctionx.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public void save(User user) {
    userRepository.save(user);
  }

  @Override
  public void deleteById(Long id) {
    userRepository.deleteById(id);
  }

  @Override
  public User getById(Long id) {
    Optional<User> optionalUser = userRepository.findById(id);

    if (optionalUser.isPresent()) {
      return optionalUser.get();
    }
    return null;
  }

  @Override
  public List<User> getAll() {
    return userRepository.findAll();
  }

  @Override
  public List<Patient> getAllPatient() {
    return userRepository.findAll().stream()
        .filter(user -> user.getRole().equals(Role.PATIENT))
        .map(user -> (Patient) user)
        .collect(Collectors.toList());
  }
  
  @Override
  public void setPatientPriorityByPatientId(long patientId, Priority priority) {
    var patient = (Patient) getById(patientId);
    patient.setPriority(priority);
    userRepository.save(patient);
  }
}
