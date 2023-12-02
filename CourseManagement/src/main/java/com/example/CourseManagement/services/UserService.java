package com.example.CourseManagement.services;

import com.example.CourseManagement.models.User;
import com.example.CourseManagement.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    UserService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }

    public List<User> getUsers()
    {
        return userRepository.findAll();
    }

    public ResponseEntity<User> addUser(@RequestBody User user)
    {
        if(this.userRepository.findByName(user.getName())==null) {
            User savedUser = this.userRepository.save(user);
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
