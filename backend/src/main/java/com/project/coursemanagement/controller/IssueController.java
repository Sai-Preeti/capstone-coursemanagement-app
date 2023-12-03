package com.project.coursemanagement.controller;


import com.project.coursemanagement.models.Issue;
import com.project.coursemanagement.services.IssueService;
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
