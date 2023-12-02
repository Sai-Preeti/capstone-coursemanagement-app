package com.example.CourseManagement.services;

import com.example.CourseManagement.models.Issue;
import com.example.CourseManagement.repository.IssueRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class IssueService {

    private final IssueRepository issueRepository;
    IssueService(IssueRepository issueRepository)
    {
        this.issueRepository=issueRepository;
    }

    public List<Issue> getIssues()
    {
        return issueRepository.findAll();
    }

    public ResponseEntity<Issue> addIssue(@RequestBody Issue issue)
    {
            Issue savedIssue = this.issueRepository.save(issue);
            return ResponseEntity.ok(savedIssue);

    }
}
