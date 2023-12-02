package com.example.CourseManagement.services;

import com.example.CourseManagement.models.Assessment;
import com.example.CourseManagement.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssessmentService {

    private final AssessmentRepository assessmentRepository;

    AssessmentService(AssessmentRepository assessmentRepository)
    {
        this.assessmentRepository=assessmentRepository;
    }

    public List<Assessment> getAllAssessments() {
        return this.assessmentRepository.findAll();
    }
}
