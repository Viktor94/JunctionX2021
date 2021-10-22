package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
public class CarePlanForm {

  @Id @GeneratedValue private Long id;
  @ManyToOne private Patient patient;

  @ManyToOne
  @JoinColumn(name = "bloodpressure_ID")
  private BloodPressure bloodpressure;

  private OffsetDateTime dateOfSubmit;
  private Integer weight;
}
