package hu.titok.junctionx.services.questions;

import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
