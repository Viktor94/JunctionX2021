package hu.titok.junctionx.services.Symptoms;

import hu.titok.junctionx.domains.Symptom;
import hu.titok.junctionx.domains.enums.SymptomType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SymptomService {

    void save(Symptom symptom);

    void deleteById(Long id);

    Symptom getById(Long id);

    List<Symptom> getAll();
    
    int countSymptomsByPatientIdAndSymptomType(long patientId, SymptomType symptomType);
}
