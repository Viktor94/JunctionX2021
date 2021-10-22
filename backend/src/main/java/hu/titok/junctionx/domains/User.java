package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
public abstract class User {

  @Id @GeneratedValue private Long id;
  private String email;
  private String password;
  private String fullName;
  private String phoneNumber;
  private LocalDate dateOfBirth;

  public User(String email, String password, String fullName, String phoneNumber) {
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
  }
}
