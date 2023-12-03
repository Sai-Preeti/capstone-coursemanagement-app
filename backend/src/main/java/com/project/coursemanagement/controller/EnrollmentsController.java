package com.project.coursemanagement.controller;


import com.project.coursemanagement.models.Enrollments;
import com.project.coursemanagement.services.EnrollmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@CrossOrigin(origins = "http://localhost:4200")
public class EnrollmentsController {


    private final EnrollmentService enrollmentService;
    EnrollmentsController(EnrollmentService enrollmentService)
    {
        this.enrollmentService=enrollmentService;
    }
    @GetMapping("/get")
    public ResponseEntity<List<Enrollments>> getCourses()
    {
        return ResponseEntity.ok(this.enrollmentService.getEnrollments());
    }

    @PostMapping("/addEnrollment")
    public void addTemp(@RequestBody Enrollments enrollments)
    {

        this.enrollmentService.addEnrollment(enrollments);
    }
}
