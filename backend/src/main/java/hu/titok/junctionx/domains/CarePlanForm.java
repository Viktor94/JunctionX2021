package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class CarePlanForm {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Patient patient;

    private Integer systolic;
    private Integer diastolic;
    private Integer pulse;
    private OffsetDateTime dateOfSubmit;
    private Integer weight;
    private String longAnswer;

    @OneToMany
    private List<Answer> answers;
}
