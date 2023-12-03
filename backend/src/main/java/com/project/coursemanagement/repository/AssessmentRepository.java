package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.Assessment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssessmentRepository extends MongoRepository<Assessment,String> {

}
