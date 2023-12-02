package com.example.CourseManagement.services;

import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class CourseService {


    private final CourseRepository courseRepository;
    CourseService(CourseRepository courseRepository)
    {
        this.courseRepository=courseRepository;
    }
    public List<Course> getCourses()
    {
        return this.courseRepository.findAll();
    }

    public void delete(@RequestBody Course course)
    {
        courseRepository.deleteById(course.getId());
    }


    public ResponseEntity<Course> addTemp(@RequestBody Course course)
    {

        if(this.courseRepository.findByName(course.getName())==null) {
            Course savedStudent = this.courseRepository.save(course);
            return ResponseEntity.ok(savedStudent);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    public List<Course> getTopUsers() {
        return courseRepository.findTop3ByOrderByRatingDesc();
    }
}
