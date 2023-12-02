package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Feedback;
import com.example.CourseManagement.models.Issue;
import com.example.CourseManagement.repository.FeedbackRepository;
import com.example.CourseManagement.repository.IssueRepository;
import com.example.CourseManagement.services.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/issues")
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {


    private final IssueService issueService;
    IssueController(IssueService issueService)
    {
        this.issueService=issueService;
    }
    @GetMapping("/get")
    public ResponseEntity<List<Issue>> getIssues()
    {
        return ResponseEntity.ok(this.issueService.getIssues());
    }

    @PostMapping("/addIssue")
    public void addIssue(@RequestBody Issue issue)
    {
        this.issueService.addIssue(issue);
    }
}
