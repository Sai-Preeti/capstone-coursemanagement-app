package com.project.coursemanagement.services;

import com.project.coursemanagement.models.Response;
import org.springframework.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.project.coursemanagement.models.User;
import com.project.coursemanagement.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.List;

@Service
public class UserService {

    private final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    UserService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }

    public List<User> getUsers()
    {
        return userRepository.findAll();
    }

    public ResponseEntity<Response> addUser(@RequestBody User user)
    {
        try {
            if (this.userRepository.findByName(user.getName()) == null) {
                User savedUser = this.userRepository.save(user);
                return ResponseEntity.status(HttpStatus.CREATED).body(new Response("User created successfully"));
            } else {
                return ResponseEntity.badRequest().build();
            }
        } catch (Exception e) {
            logger.error("Error occurred while creating user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Response("Failed to create user. Please try again later."));
        }
    }
}
