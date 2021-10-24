package hu.titok.junctionx.controllers;

import hu.titok.junctionx.domains.Question;
import hu.titok.junctionx.services.questions.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

  private final QuestionService questionService;

  @Autowired
  public QuestionController(QuestionService questionService) {
    this.questionService = questionService;
  }

  @GetMapping("/")
  public ResponseEntity<List<Question>> getAllQuestions() {
    return ResponseEntity.ok(questionService.getAll());
  }
}
