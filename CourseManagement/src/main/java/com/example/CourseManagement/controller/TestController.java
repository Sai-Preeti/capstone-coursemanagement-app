package com.example.CourseManagement.controller;


import com.example.CourseManagement.models.Temp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "https://chat.openai.com/")
public class TestController {
    @GetMapping("/get")
    public String getMesg()
    {
        return "It works";
    }


}
