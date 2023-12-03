package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.Issue;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IssueRepository extends MongoRepository<Issue,String> {
    Issue findByName(String name);
}
