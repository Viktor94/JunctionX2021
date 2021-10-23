package hu.titok.junctionx.services.Careplan;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.pojos.StatusReport;
import hu.titok.junctionx.repositories.AnswerRepository;
import hu.titok.junctionx.repositories.CarePlanFormRepository;
import hu.titok.junctionx.services.alarmProcess.AlarmProcessService;
import hu.titok.junctionx.services.users.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarePlanFormServiceImpl implements CarePlanFormService {

  private final CarePlanFormRepository carePlanFormRepository;
  private final AnswerRepository answerRepository;
  private final UserService userService;
  private final AlarmProcessService alarmProcessService;

  @Override
  public List<StatusReport> submitForm(long patientId, CarePlanForm carePlanForm) {
    var patient = (Patient) userService.getById(patientId);
    carePlanForm.setDateOfSubmit(OffsetDateTime.now());
    carePlanForm.setPatient(patient);
    var answers = carePlanForm.getAnswers();
    for (var answer : answers) {
      answer.setPatient(patient);
      answer.setAnswerDate(LocalDate.now());
    }
    answerRepository.saveAll(answers);
    answerRepository.flush();
    carePlanFormRepository.save(carePlanForm);
    setBloodPressureStatus(carePlanForm.getId());
    
    var questions = answers.stream().map(Answer::getQuestion).collect(Collectors.toList());
    
    return alarmProcessService.manageSymptom(patient, questions);
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
