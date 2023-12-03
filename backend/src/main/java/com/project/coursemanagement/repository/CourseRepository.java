package com.project.coursemanagement.repository;

import com.project.coursemanagement.models.Course;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CourseRepository extends MongoRepository<Course, String> {

    Course findByName(String name);

    List<Course> findTop3ByOrderByRatingDesc();

    @Query("{'id':?0}")
    void deleteById(ObjectId id);

}