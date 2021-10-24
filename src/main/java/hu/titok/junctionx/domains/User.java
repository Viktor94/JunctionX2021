package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "userRole")
public abstract class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String email;
  private String password;
  private String fullName;
  private String phoneNumber;
  private LocalDate dateOfBirth;
  @Enumerated(EnumType.STRING)
  private Role role;

  public User(Role role) {
    this();
    this.role = role;
  }

  public User(String email, String password, String fullName, String phoneNumber) {
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
  }
}
