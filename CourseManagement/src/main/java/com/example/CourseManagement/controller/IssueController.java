package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Feedback;
import com.example.CourseManagement.models.Issue;
import com.example.CourseManagement.repository.FeedbackRepository;
import com.example.CourseManagement.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/issues")
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;
    @GetMapping("/get")
    public List<Issue> getCourses()
    {
        return issueRepository.findAll();
    }

    @PostMapping("/addIssue")
    public ResponseEntity<?> addTemp(@RequestBody Issue issue)
    {
        System.out.println(this.issueRepository.findByName(issue.getName()));
        if(this.issueRepository.findByName(issue.getName())==null) {
            System.out.println("here");
            Issue savedIssue = this.issueRepository.save(issue);
            System.out.println("saved feedback= "+savedIssue.getName());
            return ResponseEntity.ok(savedIssue);
        } else {
            return ResponseEntity.badRequest().build();
        }
//        return ResponseEntity.badRequest().build();
    }
}
