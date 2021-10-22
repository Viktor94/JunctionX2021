package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Symptom;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class SymptomCounter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Patient patient;
    private Symptom symptom;
    private Integer occurrence;
}
