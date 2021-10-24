package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.domains.enums.CancerType;
import hu.titok.junctionx.domains.enums.SymptomType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {


    @GetMapping("/cancer-types")
    public ResponseEntity<List<CancerType>> getAllCancerType() {
        return ResponseEntity.ok(Arrays.asList(CancerType.values()));
    }

    @GetMapping("/symptom-types")
    public ResponseEntity<List<SymptomType>> getAllSymptomType() {
        return ResponseEntity.ok(Arrays.asList(SymptomType.values()));
    }
}
