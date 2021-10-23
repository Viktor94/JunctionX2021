package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.RiskFactorAndPrevention;
import hu.titok.junctionx.services.patientTipsService.RiskFactorAndPreventionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/prevention")
public class RiskFactorAndPreventionController {

  private final RiskFactorAndPreventionService riskFactorAndPreventionService;

  @Autowired
  public RiskFactorAndPreventionController(
      RiskFactorAndPreventionService riskFactorAndPreventionService) {
    this.riskFactorAndPreventionService = riskFactorAndPreventionService;
  }

  @GetMapping("/risk-factors")
  public ResponseEntity<List<RiskFactorAndPrevention>> riskFactors() {

    return ResponseEntity.ok(riskFactorAndPreventionService.tricksAndTrips(1L));
  }
}
