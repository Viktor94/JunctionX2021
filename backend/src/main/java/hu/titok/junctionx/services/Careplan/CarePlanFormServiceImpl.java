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
