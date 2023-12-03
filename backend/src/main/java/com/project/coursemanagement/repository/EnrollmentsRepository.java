package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.Enrollments;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EnrollmentsRepository extends MongoRepository<Enrollments,String> {
    List<Enrollments> findByName(String name);
}
