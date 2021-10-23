package hu.titok.junctionx.domains;

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

  @ManyToOne private Patient patient; // todo set

  @ManyToOne private Question question;

  private Boolean response;

  private LocalDate occurrenceDate; // todo set
}
