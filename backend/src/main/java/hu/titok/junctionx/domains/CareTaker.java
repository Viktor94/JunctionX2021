package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Proxy;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@Getter
@Setter
@DiscriminatorValue("CareTaker")
public class CareTaker extends User {

  @ManyToMany private List<Patient> patientList;

  public CareTaker() {
    super(Role.CARE_TAKER);
  }
}
