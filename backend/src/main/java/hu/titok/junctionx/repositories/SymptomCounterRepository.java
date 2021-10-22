package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.SymptomCounter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomCounterRepository extends JpaRepository<SymptomCounter, Long> {}
