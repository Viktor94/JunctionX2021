package hu.titok.junctionx.services;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.services.Careplan.CarePlanFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HyperTensionService {

  private final CarePlanFormService carePlanService;

  @Autowired
  public HyperTensionService(CarePlanFormService carePlanFormService) {
    this.carePlanService = carePlanFormService;
  }

  public void setBloodPressureStatus(Long carePlanFormId) {
    CarePlanForm carePlanForm = carePlanService.getById(carePlanFormId);

    int systolic = carePlanForm.getSystolic();
    int diastolic = carePlanForm.getDiastolic();

    if (systolic < 120 && diastolic < 80) {
      carePlanForm.setBloodPressureStatus("NORMAL");
    } else if (between(systolic, 120, 129) && diastolic < 80) {
      carePlanForm.setBloodPressureStatus("ELEVATED");
    } else if (between(systolic, 130, 139) || between(diastolic, 80, 89)) {
      carePlanForm.setBloodPressureStatus(("HIGH BLOOD PRESSURE STAGE 1"));
    } else if (between(systolic, 140, 90) || between(diastolic, 90, 119)) {
      carePlanForm.setBloodPressureStatus("HIGH BLOOD PRESSURE STAGE 2");
    } else if (systolic > 180 || diastolic > 120) {
      carePlanForm.setBloodPressureStatus("HYPERTENSIVE CRISIS");
    }
  }

  private boolean between(int i, int min, int max) {
    return (i >= min && i <= max);
  }
}
