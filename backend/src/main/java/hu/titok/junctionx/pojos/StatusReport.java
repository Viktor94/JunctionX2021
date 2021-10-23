package hu.titok.junctionx.pojos;

import hu.titok.junctionx.domains.enums.Urgency;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StatusReport {
  private Urgency urgency;
  private String message;
}
