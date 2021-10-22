package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Patient extends User {

  private Long age;
  private Long weightBeforeTreatment;

  @OneToMany private List<Weight> weights;

  @ManyToMany private List<Illness> illnessList;

  @ManyToMany private List<CareTaker> careTakerList;
}
