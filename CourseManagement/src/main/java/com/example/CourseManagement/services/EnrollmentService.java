package com.example.CourseManagement.services;

import com.example.CourseManagement.models.Enrollments;
import com.example.CourseManagement.repository.EnrollmentsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class EnrollmentService {
    private final EnrollmentsRepository enrollmentsRepository;
    EnrollmentService(EnrollmentsRepository enrollmentsRepository)
    {
        this.enrollmentsRepository=enrollmentsRepository;
    }

    public List<com.example.CourseManagement.models.Enrollments> getEnrollments()
    {
        return enrollmentsRepository.findAll();
    }

    public ResponseEntity<Enrollments> addEnrollment(@RequestBody Enrollments enrollments)
    {

        Enrollments savedEnrollment = this.enrollmentsRepository.save(enrollments);
        return ResponseEntity.ok(savedEnrollment);
    }
}
