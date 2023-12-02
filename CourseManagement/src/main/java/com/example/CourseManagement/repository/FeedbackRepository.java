package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.Feedback;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FeedbackRepository extends MongoRepository<Feedback,ObjectId> {
    Feedback findByName(String name);
}
