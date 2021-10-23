package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.QuestionType;
import hu.titok.junctionx.domains.enums.SymptomType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private CancerType cancerType;

  @Enumerated(EnumType.STRING)
  private SymptomType symptomType;
  
  @Enumerated(EnumType.STRING)
  private QuestionType questionType;

  private String description;
  
  @Convert(converter = StringListConverter.class)
  private List<String> numericLabels;
}
