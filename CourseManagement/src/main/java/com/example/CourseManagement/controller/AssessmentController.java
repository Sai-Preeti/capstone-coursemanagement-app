package com.example.CourseManagement.controller;

import com.example.CourseManagement.services.AssessmentService;
import com.example.CourseManagement.models.Assessment;
import com.example.CourseManagement.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/assessment")
@CrossOrigin(origins = "http://localhost:4200")
public class AssessmentController {

    @Autowired
    private AssessmentService assessmentService;



    @GetMapping("/get")
    public ResponseEntity<List<Assessment>> getAssessments()
    {
        return ResponseEntity.ok(this.assessmentService.getAllAssessments());
    }
}
