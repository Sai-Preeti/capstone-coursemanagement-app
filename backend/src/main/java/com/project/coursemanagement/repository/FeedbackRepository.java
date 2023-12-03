package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.Feedback;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<Feedback,ObjectId> {
    Feedback findByName(String name);
}
