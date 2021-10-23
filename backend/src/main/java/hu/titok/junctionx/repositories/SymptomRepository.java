package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.Symptom;
import hu.titok.junctionx.domains.enums.SymptomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomRepository extends JpaRepository<Symptom, Long> {
	int countSymptomsByPatientIdAndSymptomType(long patientId, SymptomType symptomType);
}
