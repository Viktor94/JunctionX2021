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
public class Patient extends User {

  @ManyToMany private List<User> careTakerList;
  @OneToMany private List<CarePlanForm> carePlanFormList;
  @OneToMany private List<SymptomCounter> symptomCounters;

  private String primaryCareProvider;
  private String surgeon;
  private String radiationOncologist;
  private String medicalOncologist;
  private Priority priority;
  
  private String relativeName;
  private String relativePhoneNumber;
  private String relativeEmail;

  @OneToMany private List<Question> questions;

  public Patient(String email, String password, String fullName, String phoneNumber) {
    super(email, password, fullName, phoneNumber);
  }

  public Patient() {
    super();
  }
}
