package com.project.coursemanagement.controller;

import com.project.coursemanagement.models.Course;
import com.project.coursemanagement.services.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {

    private final CourseService courseService;
    CourseController(CourseService courseService)
    {
        this.courseService=courseService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Course>> getCourses()
    {
        return ResponseEntity.ok(this.courseService.getCourses());
    }

    @GetMapping("/top")
    public ResponseEntity<List<Course>> getTopUsers() {
        return ResponseEntity.ok(courseService.getTopUsers());
    }

    @DeleteMapping("/delete")
    void deleteById(@RequestBody Course course)
    {
       courseService.delete(course);
    }
    @PostMapping("/addCourse")
    public ResponseEntity<Course> addTemp(@RequestBody Course course)
    {
        return courseService.addTemp(course);
    }

}