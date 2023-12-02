package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Course;
import com.example.CourseManagement.models.User;
import com.example.CourseManagement.repository.CourseRepository;
import com.example.CourseManagement.repository.UserRepository;
import com.example.CourseManagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;
    UserController(UserService userService)
    {
        this.userService=userService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<User>> getUsers()
    {
        return ResponseEntity.ok(this.userService.getUsers());
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user)
    {
        this.userService.addUser(user);
    }
}
