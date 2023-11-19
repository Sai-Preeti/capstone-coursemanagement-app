package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.Feedback;
import com.example.CourseManagement.repository.CourseRepository;
import com.example.CourseManagement.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;
    @GetMapping("/get")
    public List<Feedback> getCourses()
    {
        return feedbackRepository.findAll();
    }

    @PostMapping("/addFeedback")
    public ResponseEntity<?> addTemp(@RequestBody Feedback feedback)
    {
        System.out.println(this.feedbackRepository.findByName(feedback.getName()));
        if(this.feedbackRepository.findByName(feedback.getName())==null) {
            System.out.println("here");
            Feedback savedFeedback = this.feedbackRepository.save(feedback);
            System.out.println("saved feedback= "+savedFeedback.getName());
            return ResponseEntity.ok(savedFeedback);
        } else {
            return ResponseEntity.badRequest().build();
        }
//        return ResponseEntity.badRequest().build();
    }

}
