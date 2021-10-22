package hu.titok.junctionx.services.Symptoms;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.domains.SymptomCounter;
import hu.titok.junctionx.domains.enums.Symptom;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SymptomCounterService  {

    void save(SymptomCounter symptomCounter);

    void deleteById(Long id);

    SymptomCounter getById(Long id);

    List<SymptomCounter> getAll();
}
