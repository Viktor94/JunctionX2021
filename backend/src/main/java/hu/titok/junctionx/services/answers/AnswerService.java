package hu.titok.junctionx.services.answers;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.SymptomType;

import java.util.List;

public interface AnswerService {

  void save(Answer answer);

  void deleteById(Long id);

  Answer getById(Long id);

  List<Answer> getAll();
  
  int countSignificantYesNoAnswers(boolean yesNoResponse, long patientId, CancerType cancerType, SymptomType symptomType);
}
