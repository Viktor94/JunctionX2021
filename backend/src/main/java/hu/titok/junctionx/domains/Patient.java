package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Priority;
import hu.titok.junctionx.domains.enums.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@DiscriminatorValue("Patient")
public class Patient extends User {

  @ManyToMany private List<User> careTakerList;
  @OneToMany private List<CarePlanForm> carePlanFormList;
  @OneToMany private List<Symptom> symptomCounters;

  private String primaryCareProvider;
  private String surgeon;
  private String radiationOncologist;
  private String medicalOncologist;
  @Enumerated(EnumType.STRING)
  private Priority priority;
  
  private String relativeName;
  private String relativePhoneNumber;
  private String relativeEmail;

  @OneToMany private List<Question> questions;

  public Patient(String email, String password, String fullName, String phoneNumber) {
    super(email, password, fullName, phoneNumber);
  }

  public Patient() {
    super(Role.PATIENT);
  }
}
