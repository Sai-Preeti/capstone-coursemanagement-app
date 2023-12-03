package com.project.coursemanagement.controller;


import com.project.coursemanagement.models.Feedback;
import com.project.coursemanagement.repository.FeedbackRepository;
import com.project.coursemanagement.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackController {


    private final FeedbackService feedbackService;

    @Autowired
    private FeedbackRepository feedbackRepository;
    FeedbackController(FeedbackService feedbackService)
    {
        this.feedbackService=feedbackService;
    }
    @GetMapping("/get")
    public ResponseEntity<List<Feedback>> getFeedback()
    {
        return ResponseEntity.ok(this.feedbackService.getFeedback());
    }

    @PostMapping("/addFeedback")
    public void addTemp(@RequestBody Feedback feedback)
    {
        this.feedbackService.addFeedback(feedback);
    }

}
