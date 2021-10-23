package hu.titok.junctionx.domains;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class CarePlanForm {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnore
  @JoinColumn(name = "patient_id")
  @ManyToOne private Patient patient;
  
  @OneToMany(mappedBy = "form") private List<Answer> answers;

  private Integer pulse;
  private OffsetDateTime dateOfSubmit;
  private Integer weight;
  private String longAnswer;

  private Integer systolic;
  private Integer diastolic;

  private String bloodPressureStatus;
}
