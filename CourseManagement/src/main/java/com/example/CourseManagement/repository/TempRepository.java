package com.example.CourseManagement.repository;

import com.example.CourseManagement.models.Temp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TempRepository extends MongoRepository<Temp,String> {
}
