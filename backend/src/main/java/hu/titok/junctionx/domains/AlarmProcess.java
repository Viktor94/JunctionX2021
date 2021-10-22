package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Instruction;
import hu.titok.junctionx.domains.enums.Symptom;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class AlarmProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", length = 250)
    private Long id;

    private Symptom symptom;

    private CancerType typeOfCancer;

    private int frequency;

    @Enumerated(EnumType.STRING)
    private Instruction instructions;
}
