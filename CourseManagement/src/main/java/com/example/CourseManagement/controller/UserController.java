package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.User;
import com.example.CourseManagement.repository.CourseRepository;
import com.example.CourseManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/get")
    public List<User> getCourses()
    {
        return userRepository.findAll();
    }

    @PostMapping("/addUser")
    public ResponseEntity<?> addTemp(@RequestBody User user)
    {
        System.out.println(this.userRepository.findByName(user.getName()));
        if(this.userRepository.findByName(user.getName())==null) {
            System.out.println("here");
            User savedUser = this.userRepository.save(user);
            System.out.println("saved stude= "+savedUser.getName());
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
