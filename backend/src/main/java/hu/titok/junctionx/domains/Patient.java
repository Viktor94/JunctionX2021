package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Priority;
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

  @ManyToMany private List<User> careTakerList;
  @OneToMany private List<CarePlanForm> carePlanFormList;

  private String primaryCareProvider;
  private String surgeon;
  private String radiationOncologist;
  private String medicalOncologist;
  private Priority priority;
  
  private String relativeName;
  private String relativePhoneNumber;
  private String relativeEmail;


  @OneToMany private List<Question> questions;
}
