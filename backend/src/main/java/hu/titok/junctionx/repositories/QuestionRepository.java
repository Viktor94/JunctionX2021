package hu.titok.junctionx.repositories;

import hu.titok.junctionx.domains.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {}
