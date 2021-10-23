package hu.titok.junctionx.services.users;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.domains.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

  void save(User user);

  void deleteById(Long id);

  User getById(Long id);

  List<User> getAll();

  List<Patient> getAllPatient();
}
