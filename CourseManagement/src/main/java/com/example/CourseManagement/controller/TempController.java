package com.example.CourseManagement.controller;

import com.example.CourseManagement.models.Temp;
import com.example.CourseManagement.repository.TempRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/temp")
public class TempController {

    @Autowired
    private TempRepository tempRepository;
    @GetMapping("/get")
    public List<Temp> getFunc()
    {
        return tempRepository.findAll();
    }

    @PostMapping("/addTemp")
    public ResponseEntity<?> addTemp(@RequestBody Temp temp)
    {
        System.out.println("name="+temp.getName());
        Temp savedStudent=this.tempRepository.save(temp);
        return ResponseEntity.ok(savedStudent);
    }
}
