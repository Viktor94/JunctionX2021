package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Instruction;
import hu.titok.junctionx.domains.enums.SymptomType;
import hu.titok.junctionx.domains.enums.Urgency;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class AlarmProcess {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(length = 250)
  private Long id;

  @Enumerated(EnumType.STRING)
  private SymptomType symptomType;

  @Enumerated(EnumType.STRING)
  private CancerType cancerType;

  private int frequency;
  
  @Convert(converter = InstructionListConverter.class)
  private List<Instruction> instructions;

  @Enumerated(EnumType.STRING)
  private Urgency urgency;

  private String advice;
}
