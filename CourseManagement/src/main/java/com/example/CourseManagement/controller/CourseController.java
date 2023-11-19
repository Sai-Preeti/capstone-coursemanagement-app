package com.example.CourseManagement.controller;

import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.Temp;
import com.example.CourseManagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {


    @Autowired
    private CourseRepository courseRepository;
//    private CourseService courseService;

    @GetMapping("/get")
    public List<Course> getCourses()
    {
        return courseRepository.findAll();
    }

    @GetMapping("/top3")
    public List<Course> getTop3Users() {
        return courseRepository.findTop3ByOrderByRatingDesc();
    }

    @DeleteMapping("/delete")
    void deleteById(@RequestBody Course course)
    {
        System.out.println("id= "+course.getId());
        courseRepository.deleteById(course.getId());
        System.out.print("deleted");
    }
    @PostMapping("/addCourse")
    public ResponseEntity<?> addTemp(@RequestBody Course course)
    {
//        System.out.println("name="+course.getName());
//        Course savedStudent=this.courseRepository.save(course);
//        return ResponseEntity.ok(savedStudent);
         System.out.println(this.courseRepository.findByName(course.getName()));
        if(this.courseRepository.findByName(course.getName())==null) {
            System.out.println("here");
            Course savedStudent = this.courseRepository.save(course);
            System.out.println("saved stude= "+savedStudent.getName());
            return ResponseEntity.ok(savedStudent);
        } else {
            return ResponseEntity.badRequest().build();
        }
//        return ResponseEntity.badRequest().build();
    }


}