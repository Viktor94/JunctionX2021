package hu.titok.junctionx.services.questions;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.domains.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {

    void save(Question question);

    void deleteById(Long id);

    Question getById(Long id);

    List<Question> getAll();
}
