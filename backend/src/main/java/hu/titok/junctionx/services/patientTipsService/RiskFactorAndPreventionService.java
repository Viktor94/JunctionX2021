package hu.titok.junctionx.services.patientTipsService;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.services.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RiskFactorAndPreventionService {

  private final UserService userService;

  @Autowired
  public RiskFactorAndPreventionService(UserService userService) {
    this.userService = userService;
  }

  public List<String> riskFactors(Long userID) {
    Patient patient = (Patient) userService.getById(userID);
    CancerType cancerType = patient.getCancerType();

    List<String> riskFactors = new ArrayList<>();

    if (cancerType == CancerType.LUNG) {
      riskFactors.add("Smoking");
      riskFactors.add("Asbestos");
      riskFactors.add("Radon");
    }

    if (cancerType == CancerType.KIDNEY) {
      riskFactors.add("Smoking");
      riskFactors.add("High blood pressure");
      riskFactors.add("Chronic kidney disease");
    }
    return riskFactors;
  }

  public List<String> preventionTips(Long userID) {
    Patient patient = (Patient) userService.getById(userID);
    CancerType cancerType = patient.getCancerType();

    List<String> preventionTips = new ArrayList<>();

    if (cancerType == CancerType.KIDNEY) {
      preventionTips.add("Quitting smoking");
      preventionTips.add("Lowering blood pressure");
      preventionTips.add("Maintaining a healthy body weight");
      preventionTips.add("Eating a diet high in fruits and vegetables and low in fat");
    }

    if (cancerType == CancerType.LUNG) {
      preventionTips.add("Avoid smoking tobacco");
    }

    return preventionTips;
  }
}
