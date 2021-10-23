package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.pojos.StatusReport;
import hu.titok.junctionx.services.Careplan.CarePlanFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/care-plan-form")
public class CarePlanFormController {

  private final CarePlanFormService carePlanFormService;

  @Autowired
  public CarePlanFormController(CarePlanFormService carePlanFormService) {
    this.carePlanFormService = carePlanFormService;
  }

  @PostMapping("/{patientId}")
  public ResponseEntity<List<StatusReport>> submitForm(@PathVariable long patientId, @RequestBody CarePlanForm carePlanForm) {
    return ResponseEntity.ok(carePlanFormService.submitForm(patientId, carePlanForm));
  }
}
