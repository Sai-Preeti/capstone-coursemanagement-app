package com.example.CourseManagement.controller;

import com.example.CourseManagement.models.Assessment;
import com.example.CourseManagement.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    private AssessmentRepository assessmentRepository;

    @GetMapping("/get")
    public List<Assessment> getCourses()
    {
        return assessmentRepository.findAll();
    }
}
