package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Assessment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssessmentRepository extends MongoRepository<Assessment,String> {

}
