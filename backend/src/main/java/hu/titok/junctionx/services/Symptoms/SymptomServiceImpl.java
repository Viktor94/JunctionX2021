package hu.titok.junctionx.services.Symptoms;

import hu.titok.junctionx.domains.Symptom;
import hu.titok.junctionx.domains.enums.SymptomType;
import hu.titok.junctionx.repositories.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptomServiceImpl implements SymptomService {

  private final SymptomRepository symptomRepository;

  @Autowired
  public SymptomServiceImpl(SymptomRepository symptomRepository) {
    this.symptomRepository = symptomRepository;
  }

  @Override
  public void save(Symptom symptom) {
    symptomRepository.save(symptom);
  }

  @Override
  public void deleteById(Long id) {
    symptomRepository.deleteById(id);
  }

  @Override
  public Symptom getById(Long id) {
    return symptomRepository.findById(id).orElse(null);
  }

  @Override
  public List<Symptom> getAll() {
    return symptomRepository.findAll();
  }
  
  @Override
  public int countSymptomsByPatientIdAndSymptomType(long patientId, SymptomType symptomType) {
    return symptomRepository.countSymptomsByPatientIdAndSymptomType(patientId, symptomType);
  }
}
