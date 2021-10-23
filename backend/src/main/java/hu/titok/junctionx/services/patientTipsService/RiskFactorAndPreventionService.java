package hu.titok.junctionx.services.patientTipsService;

import hu.titok.junctionx.domains.Patient;
import hu.titok.junctionx.domains.RiskFactorAndPrevention;
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

  public List<RiskFactorAndPrevention> tricksAndTrips(Long userID) {
    Patient patient = (Patient) userService.getById(userID);

    CancerType cancerType = patient.getCancerType();

    List<RiskFactorAndPrevention> riskFactorAndPreventions = new ArrayList<>();

    if (cancerType == CancerType.LUNG) {
      RiskFactorAndPrevention riskFactorAndPrevention =
          new RiskFactorAndPrevention(
              "Tobacco and smoking",
              " Tobacco smoke damages cells in the lungs, causing the cells to grow abnormally. The risk that smoking will lead to cancer is higher for people who smoke heavily and/or for a long time. Regular exposure to smoke from someone else’s cigarettes, cigars, or pipes can increase a person’s risk of lung cancer, even if that person does not smoke. This is called Environmental Tobacco Smoke (ETS) or “secondhand” tobacco smoke.\n"
                  + "\n"
                  + "Smoking marijuana and using electronic cigarettes may also increase the risk of lung cancer, but the actual risk is unknown.");

      RiskFactorAndPrevention riskFactorAndPrevention1 =
          new RiskFactorAndPrevention(
              "Asbestos",
              "These are hair-like crystals found in many types of rock and are often used as fireproof insulation in buildings. When asbestos fibers are inhaled, they can irritate the lungs. Many studies show that the combination of smoking and asbestos exposure is particularly dangerous. People who work with asbestos in a job such as shipbuilding, asbestos mining, insulation, or automotive brake repair and who smoke have a higher risk of developing NSCLC. Using protective breathing equipment reduces this risk.");

      riskFactorAndPreventions.add(riskFactorAndPrevention);
      riskFactorAndPreventions.add(riskFactorAndPrevention1);
    }

    if (cancerType == CancerType.KIDNEY) {
      RiskFactorAndPrevention riskFactorAndPrevention =
          new RiskFactorAndPrevention(
              "High blood pressure",
              "Men with high blood pressure, also called hypertension, may be more likely to develop kidney cancer.");

      RiskFactorAndPrevention riskFactorAndPrevention1 =
          new RiskFactorAndPrevention(
              "Exposure to cadmium",
              "Some studies have shown a connection between exposure to the metallic element cadmium and kidney cancer. Working with batteries, paints, or welding materials may increase a person’s risk as well. This risk is even higher for smokers who have been exposed to cadmium.");

      riskFactorAndPreventions.add(riskFactorAndPrevention);
      riskFactorAndPreventions.add(riskFactorAndPrevention1);
    }
    return riskFactorAndPreventions;
  }
}
