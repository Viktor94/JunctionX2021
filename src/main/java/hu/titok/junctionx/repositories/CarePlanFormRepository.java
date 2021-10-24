package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.CarePlanForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarePlanFormRepository extends JpaRepository<CarePlanForm, Long> {}
