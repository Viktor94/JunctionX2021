package hu.titok.junctionx.services.questions;

import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Symptom;
import hu.titok.junctionx.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

  private final QuestionRepository questionRepository;

  @Autowired
  public QuestionServiceImpl(QuestionRepository questionRepository) {
    this.questionRepository = questionRepository;
  }

  @Override
  public void save(Question question) {
    questionRepository.save(question);
  }

  @Override
  public void deleteById(Long id) {
    questionRepository.deleteById(id);
  }

  @Override
  public Question getById(Long id) {
    return questionRepository.findById(id).orElse(null);
  }

  @Override
  public List<Question> getAll() {
    return questionRepository.findAll();
  }

  @EventListener(ApplicationReadyEvent.class)
  public void initSave() {
    List<Question> questions = new ArrayList<>();
    questions.add(new Question(1L, CancerType.LUNG, Symptom.COUGH, "Joint pains"));
    questions.add(new Question(2L, CancerType.LUNG, Symptom.COUGH, "Leg or muscle cramps"));
    questions.add(new Question(3L, CancerType.LUNG, Symptom.COUGH, "Unexplained weight loss"));
    questions.add(new Question(4L, CancerType.LUNG, Symptom.COUGH, "Lack of restful sleep"));
    questions.add(new Question(5L, CancerType.LUNG, Symptom.COUGH, "Hot flashes"));
    questionRepository.saveAll(questions);
  }
}
