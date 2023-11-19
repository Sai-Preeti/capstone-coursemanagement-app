package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.Feedback;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<Feedback,ObjectId> {
    Feedback findByName(String name);
}
