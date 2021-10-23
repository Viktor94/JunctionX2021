package hu.titok.junctionx.services.Careplan;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.repositories.AnswerRepository;
import hu.titok.junctionx.repositories.CarePlanFormRepository;
import hu.titok.junctionx.services.HyperTensionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarePlanFormServiceImpl implements CarePlanFormService {

  private final CarePlanFormRepository carePlanFormRepository;
  private final AnswerRepository answerRepository;
  private final HyperTensionService diabetesAndHyperTensionService;

  @Autowired
  public CarePlanFormServiceImpl(
      CarePlanFormRepository carePlanFormRepository,
      AnswerRepository answerRepository,
      HyperTensionService diabetesAndHyperTensionService) {
    this.carePlanFormRepository = carePlanFormRepository;
    this.answerRepository = answerRepository;
    this.diabetesAndHyperTensionService = diabetesAndHyperTensionService;
  }

  @Override
  public void save(CarePlanForm carePlanForm) {
    answerRepository.saveAll(carePlanForm.getAnswers());
    diabetesAndHyperTensionService.setBloodPressureStatus(carePlanForm.getId());
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
}
