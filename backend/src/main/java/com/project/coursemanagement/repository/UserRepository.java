package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByName(String name);
}
