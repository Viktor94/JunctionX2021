package hu.titok.junctionx.domains;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Answer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonBackReference
  @ManyToOne private Patient patient;

  @ManyToOne private Question question;

  private Boolean yesNoResponse;
  private Integer numericResponse;
  private String textResponse;

  private LocalDate answerDate;
}
