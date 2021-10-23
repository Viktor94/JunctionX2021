package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Instruction;
import hu.titok.junctionx.domains.enums.Symptom;
import hu.titok.junctionx.domains.enums.Urgency;
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

    @Enumerated(EnumType.STRING)
    private Symptom symptom;

    @Enumerated(EnumType.STRING)
    private CancerType cancerType;

    private int frequency;

    @Enumerated(EnumType.STRING)
    private Instruction instructions;

    @Enumerated(EnumType.STRING)
    private Urgency urgency;

    private String advice;
}
