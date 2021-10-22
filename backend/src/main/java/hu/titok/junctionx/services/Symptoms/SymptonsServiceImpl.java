package hu.titok.junctionx.services.Symptoms;

import hu.titok.junctionx.domains.SymptomCounter;
import hu.titok.junctionx.repositories.SymptomCounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptonsServiceImpl implements SymptomCounterService {

  private final SymptomCounterRepository symptomCounterRepository;

  @Autowired
  public SymptonsServiceImpl(SymptomCounterRepository symptomCounterRepository) {
    this.symptomCounterRepository = symptomCounterRepository;
  }

  @Override
  public void save(SymptomCounter symptomCounter) {
    symptomCounterRepository.save(symptomCounter);
  }

  @Override
  public void deleteById(Long id) {
    symptomCounterRepository.deleteById(id);
  }

  @Override
  public SymptomCounter getById(Long id) {
    return symptomCounterRepository.findById(id).orElse(null);
  }

  @Override
  public List<SymptomCounter> getAll() {
    return symptomCounterRepository.findAll();
  }
}
