package com.project.coursemanagement.controller;


import com.project.coursemanagement.models.User;
import com.project.coursemanagement.services.UserService;
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
