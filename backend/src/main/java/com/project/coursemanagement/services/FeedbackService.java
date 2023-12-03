package com.project.coursemanagement.services;

import com.project.coursemanagement.models.Response;
import com.project.coursemanagement.models.Feedback;
import com.project.coursemanagement.repository.FeedbackRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class FeedbackService {

    private final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final FeedbackRepository feedbackRepository;
    FeedbackService(FeedbackRepository feedbackRepository)
    {
        this.feedbackRepository=feedbackRepository;
    }

    public List<Feedback> getFeedback()
    {
        return feedbackRepository.findAll();
    }

    public ResponseEntity<Response> addFeedback(@RequestBody Feedback feedback)
    {


        try {
            if (this.feedbackRepository.findByName(feedback.getName()) == null) {
                Feedback savedFeedback = this.feedbackRepository.save(feedback);
                return ResponseEntity.status(HttpStatus.CREATED).body(new Response("Feedback created successfully"));
            } else {
                return ResponseEntity.badRequest().build();
            }
        } catch (Exception e) {
            logger.error("Error occurred while creating user", e);
            Response errorResponse = new Response("Failed to create feedback. Please try again later.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

}
