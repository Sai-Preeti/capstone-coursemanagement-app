package com.project.coursemanagement.services;

import com.project.coursemanagement.models.Course;
import com.project.coursemanagement.models.Feedback;
import com.project.coursemanagement.models.Response;
import com.project.coursemanagement.repository.CourseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.http.HttpStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
public class CourseService {

    private final Logger logger = LoggerFactory.getLogger(UserService.class);
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


    public ResponseEntity<Response> addCourse(@RequestBody Course course)
    {
        try {
            if (this.courseRepository.findByName(course.getName()) == null) {
                Course savedCourse = this.courseRepository.save(course);
                return ResponseEntity.status(HttpStatus.CREATED).body(new Response("Course created successfully"));
            } else {
                return ResponseEntity.badRequest().build();
            }
        } catch (Exception e) {
            logger.error("Error occurred while creating user", e);
            Response errorResponse = new Response("Failed to create course. Please try again later.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    public List<Course> getTopUsers() {
        return courseRepository.findTop3ByOrderByRatingDesc();
    }
}
