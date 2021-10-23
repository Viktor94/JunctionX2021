package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.Answer;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.SymptomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
  int countAnswersByYesNoResponseAndPatientIdAndQuestionCancerTypeAndQuestionSymptomType(
          boolean yesNoResponse, long patientId, CancerType cancerType, SymptomType symptomType);
}
