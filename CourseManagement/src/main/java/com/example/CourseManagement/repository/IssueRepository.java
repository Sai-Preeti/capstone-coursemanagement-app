package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Feedback;
import com.example.CourseManagement.models.Issue;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IssueRepository extends MongoRepository<Issue,String> {
    Issue findByName(String name);
}
