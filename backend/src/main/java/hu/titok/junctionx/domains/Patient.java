package hu.titok.junctionx.domains;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hu.titok.junctionx.domains.enums.CancerType;
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

  @JsonIgnore
  @ManyToMany private List<User> careTakerList;
  @OneToMany(mappedBy = "patient") private List<CarePlanForm> carePlanFormList;

  private String primaryCareProvider;
  private String surgeon;
  private String radiationOncologist;
  private String medicalOncologist;
  @Enumerated(EnumType.STRING)
  private Priority priority;

  private String relativeName;
  private String relativePhoneNumber;
  private String relativeEmail;
  @Enumerated(EnumType.STRING)
  private CancerType cancerType;

  @ManyToMany private List<Question> questions;

  public Patient(String email, String password, String fullName, String phoneNumber) {
    super(email, password, fullName, phoneNumber);
  }

  public Patient() {
    super(Role.PATIENT);
  }

  public CarePlanForm addCarePlanForm(CarePlanForm carePlanForm) {
    this.carePlanFormList.add(carePlanForm);
    carePlanForm.setPatient(this);
    return carePlanForm;
  }
}
