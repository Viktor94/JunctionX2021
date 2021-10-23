package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.AlarmProcess;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.SymptomType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmProcessRepository extends JpaRepository<AlarmProcess, Long> {
  AlarmProcess findByCancerTypeAndSymptomTypeAndFrequency(
      CancerType cancerType, SymptomType symptom, int frequency);
}
