package hu.titok.junctionx.domains;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RiskFactorAndPrevention {

  public String riskFactor;
  public String prevention;

  public RiskFactorAndPrevention(String riskFactor, String prevention) {
    this.riskFactor = riskFactor;
    this.prevention = prevention;
  }
}
