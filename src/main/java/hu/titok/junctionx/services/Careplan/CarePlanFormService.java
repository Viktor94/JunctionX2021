package hu.titok.junctionx.services.Careplan;

import hu.titok.junctionx.domains.CarePlanForm;
import hu.titok.junctionx.pojos.StatusReport;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CarePlanFormService {

  List<StatusReport> submitForm(long patientId, CarePlanForm carePlanForm);

  void deleteById(Long id);

  CarePlanForm getById(Long id);

  List<CarePlanForm> getAll();
}
