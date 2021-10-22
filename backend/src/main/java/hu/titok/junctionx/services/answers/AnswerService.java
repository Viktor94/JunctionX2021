package hu.titok.junctionx.services.answers;

import hu.titok.junctionx.domains.Answer;

import java.util.List;

public interface AnswerService {

    void save(Answer answer);

    void deleteById(Long id);

    Answer getById(Long id);

    List<Answer> getAll();
}
