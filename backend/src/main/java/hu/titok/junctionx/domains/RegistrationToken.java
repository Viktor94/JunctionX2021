package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class RegistrationToken {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "token_id", length = 250)
  private Long tokenid;

  @Column(name = "password_reset_token", length = 250)
  private String token;

  private LocalDateTime createdAt;

  private LocalDateTime expirationTime;

  @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
  @JoinColumn(nullable = false, name = "user_id")
  private User user;

  public RegistrationToken(User user) {
    this.user = user;
    this.createdAt = LocalDateTime.now();
    this.token = UUID.randomUUID().toString();
    this.expirationTime = createdAt.plusHours(24);
  }

  public boolean isTokenExpired() {
    return expirationTime.isBefore(LocalDateTime.now());
  }
}
