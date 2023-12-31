package com.project.coursemanagement.services;

import com.project.coursemanagement.models.Assessment;
import com.project.coursemanagement.repository.AssessmentRepository;
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
