import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../Services/feedback.service';
import { UserService } from '../../Services/user.service';
import {MatTableModule} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import { Router } from '@angular/router';

interface feedback{
  name:string,
  email:string,
  message:string
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
  feedbackForm:FormGroup;
  displayedColumns: string[] = ['Name', 'Email', 'Message'];
  dataSource :any=[];
  constructor(private feedbackService:FeedbackService,
  public userService:UserService,
  public router:Router)
  {
      this.feedbackForm=new FormGroup({
        name:new FormControl(''),
        email:new FormControl('',[Validators.required,Validators.email]),
        instructor_name:new FormControl('',[Validators.required]),
        message:new FormControl(''),
      })
  }

  submitFeedback()
  {
    console.log(this.feedbackForm.value)
    if(this.feedbackForm.valid)
    {
        if(this.feedbackForm.valid)
        {
          this.feedbackService.postFeedback(this.feedbackForm.value).subscribe((response:any)=>{
            console.log("dialog res" ,response);
            window.location.reload();
            window.alert("Feedback saved")
          });
        }
      }
    }

    ngOnInit()
    {
      this.feedbackService.getFeedback().subscribe((res)=>{
        console.log(res)
        console.log(this.userService.loggedUser)
        this.dataSource=res.filter((e:any)=>this.userService.loggedUser==e.instructor_name)
      });
    }

    logout()
    {
      this.userService.loggedUser="";
      this.userService.loggedUserRole="";
      this.router.navigate(['/']);
    }
  }


