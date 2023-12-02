package com.example.CourseManagement.services;

import com.example.CourseManagement.models.Feedback;
import com.example.CourseManagement.repository.FeedbackRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    FeedbackService(FeedbackRepository feedbackRepository)
    {
        this.feedbackRepository=feedbackRepository;
    }

    public List<Feedback> getFeedback()
    {
        return feedbackRepository.findAll();
    }

    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback)
    {

        if(this.feedbackRepository.findByName(feedback.getName())==null) {
            Feedback savedFeedback = this.feedbackRepository.save(feedback);
            return ResponseEntity.ok(savedFeedback);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
