package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByName(String name);
}
