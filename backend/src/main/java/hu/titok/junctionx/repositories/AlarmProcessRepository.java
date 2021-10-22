package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.AlarmProcess;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlarmProcessRepository extends JpaRepository<AlarmProcess, Long> {
    AlarmProcess findByCancerTypeAndSymptomAndFrequency(CancerType cancerType, Symptom symptom, int frequency);
}
