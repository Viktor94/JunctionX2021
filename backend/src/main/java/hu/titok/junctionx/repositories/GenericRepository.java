package hu.titok.junctionx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenericRepository<T> extends JpaRepository<T, Long> {
}
