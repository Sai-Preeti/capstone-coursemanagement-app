import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../Models/course.model';
import { CourseService } from '../../Services/course.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit{
    courseForm:FormGroup;
    videos: FormArray;
    data: Course = {
    id:'',
    name: '',
    description: '',
    instructor_name: '',
    image: '',
    videos: [
      {
        name:'',
        url:''
      }
    ]
 };
   constructor(private fb: FormBuilder,
    public dialog:MatDialogRef<AddCourseComponent>){
    this.courseForm = this.fb.group({
      name:this.fb.control(''),
      instructor_name:this.fb.control(''),
      image:this.fb.control(''),
      videos: this.fb.array([])
    });
    this.videos = this.courseForm.get('videos') as FormArray;
    this.addVideo();
    console.error(this.courseForm);
    }
   ngOnInit() { 
  }


  addVideo() {
    const newcourse = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.videos.push(newcourse);
  }
  
  removeVideo(index: number) {
    this.videos.removeAt(index);
  }

  addCourse()
  {
    console.log(this.courseForm.value)
    this.data=this.courseForm.value;
    this.dialog.close({data:this.data})
  }
  
}
