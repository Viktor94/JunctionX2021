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

  public Patient(String asd, String asd1, String asd2, String asd3) {
    super(asd, asd1, asd2, asd3);
  }

  public Patient() {
    super();
  }
}
