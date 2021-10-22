package hu.titok.junctionx.services.Careplan;

import hu.titok.junctionx.domains.CarePlanForm;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CarePlanFormService {

  void save(CarePlanForm carePlanForm);

  void deleteById(Long id);

  CarePlanForm getById(Long id);

  List<CarePlanForm> getAll();
}
