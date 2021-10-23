package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.services.Careplan.CarePlanFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/care-plan-form")
public class CarePlanFormController {

  private final CarePlanFormService carePlanFormService;

  @Autowired
  public CarePlanFormController(CarePlanFormService carePlanFormService) {
    this.carePlanFormService = carePlanFormService;
  }

  @PostMapping("/")
  public ResponseEntity<?> saveCarePlanForm(CarePlanForm carePlanForm) {
    carePlanFormService.save(carePlanForm);

    return ResponseEntity.ok(carePlanForm);
  }
}
