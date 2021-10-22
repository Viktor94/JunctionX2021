package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ManyToMany;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class CareTaker extends User {

  @ManyToMany private List<User> patientList;
}
