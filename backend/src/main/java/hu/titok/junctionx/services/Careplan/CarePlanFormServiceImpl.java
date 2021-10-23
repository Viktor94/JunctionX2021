package hu.titok.junctionx.services.Careplan;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.repositories.AnswerRepository;
import hu.titok.junctionx.repositories.CarePlanFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarePlanFormServiceImpl implements CarePlanFormService {

  private final CarePlanFormRepository carePlanFormRepository;
  private final AnswerRepository answerRepository;

  @Autowired
  public CarePlanFormServiceImpl(
      CarePlanFormRepository carePlanFormRepository, AnswerRepository answerRepository) {
    this.carePlanFormRepository = carePlanFormRepository;
    this.answerRepository = answerRepository;
  }

  @Override
  public void save(CarePlanForm carePlanForm) {
    answerRepository.saveAll(carePlanForm.getAnswers());
    setBloodPressureStatus(carePlanForm.getId());
    carePlanFormRepository.save(carePlanForm);
  }

  @Override
  public void deleteById(Long id) {
    carePlanFormRepository.deleteById(id);
  }

  @Override
  public CarePlanForm getById(Long id) {
    return carePlanFormRepository.findById(id).orElse(null);
  }

  @Override
  public List<CarePlanForm> getAll() {
    return carePlanFormRepository.findAll();
  }

  public void setBloodPressureStatus(Long carePlanFormId) {
    CarePlanForm carePlanForm = getById(carePlanFormId);

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
