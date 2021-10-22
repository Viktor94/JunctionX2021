package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.AlarmProcess;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmProcessRepository extends JpaRepository<AlarmProcess, Long> {
}
