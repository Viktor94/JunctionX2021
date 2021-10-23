package hu.titok.junctionx.services.answers;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

  private final AnswerRepository answerRepository;

  @Autowired
  public AnswerServiceImpl(AnswerRepository answerRepository) {
    this.answerRepository = answerRepository;
  }

  @Override
  public void save(Answer answer) {
    answerRepository.save(answer);
  }

  @Override
  public void deleteById(Long id) {
    answerRepository.deleteById(id);
  }

  @Override
  public Answer getById(Long id) {
    return answerRepository.findById(id).orElse(null);
  }

  @Override
  public List<Answer> getAll() {
    return answerRepository.findAll();
  }
}
