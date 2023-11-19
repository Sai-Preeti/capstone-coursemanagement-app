package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Enrollments;
import com.example.CourseManagement.models.Issue;
import com.example.CourseManagement.repository.EnrollmentsRepository;
import com.example.CourseManagement.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@CrossOrigin(origins = "http://localhost:4200")
public class EnrollmentsController {

    @Autowired
    private EnrollmentsRepository enrollmentsRepository;
    @GetMapping("/get")
    public List<Enrollments> getCourses()
    {
        return enrollmentsRepository.findAll();
    }

    @PostMapping("/addEnrollment")
    public ResponseEntity<?> addTemp(@RequestBody Enrollments enrollments)
    {
        System.out.println(this.enrollmentsRepository.findByName(enrollments.getName()));
//        if(this.enrollmentsRepository.findByName(enrollments.getName())==null) {
            System.out.println("here");
            Enrollments savedEnrollment = this.enrollmentsRepository.save(enrollments);
            System.out.println("saved feedback= "+savedEnrollment.getName());
            return ResponseEntity.ok(savedEnrollment);
//        } else {
//            return ResponseEntity.badRequest().build();
//        }
//        return ResponseEntity.badRequest().build();
    }
}
