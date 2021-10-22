package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Instruction;
import hu.titok.junctionx.domains.enums.Symptom;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

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

    @ElementCollection(targetClass= Instruction.class)
    @JoinTable(name = "tblInstructions", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "instructions", nullable = false)
    @Enumerated(EnumType.STRING)
    private Collection<Instruction> instructions;
}
