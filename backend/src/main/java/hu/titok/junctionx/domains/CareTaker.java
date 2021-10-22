package hu.titok.junctionx.domains;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
public class CareTaker extends User{

    @ManyToMany
    private List<Patient> patientList;
    private String password;
}
