package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public abstract class User {

  @Id @GeneratedValue private Long id;
  private String email;
  private String password;
  private String fullName;
  private String phoneNumber;
  private LocalDate dateOfBirth;
}
