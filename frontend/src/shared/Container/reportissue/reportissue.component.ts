import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../Services/feedback.service';
import { IssueService } from '../../Services/issue.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.component.html',
  styleUrls: ['./reportissue.component.css']
})
export class ReportissueComponent {
  issueForm:FormGroup;
  displayedColumns: string[] = ['Name', 'Email', 'Message','Resolve','Status'];
  dataSource :any=[];
  constructor(private issueService:IssueService,
    public userService:UserService,
    public router:Router)
  {
    this.issueForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      message:new FormControl('',[Validators.required])
    })

    
    this.issueService.getIssue().subscribe((res:any)=>{
      console.log(res);
      console.log(this.userService.loggedUser)
      this.dataSource=res;
    });
  }

  submitIssue()
  {
    console.log(this.issueForm.value)
    if(this.issueForm.valid)
    {
      this.issueService.postIssue(this.issueForm.value).subscribe((response:any)=>{
        console.log("dialog res" ,response);
        window.location.reload();
        window.alert("Issue saved")
      });
    }
  }
  
  logout()
    {
      this.userService.loggedUser="";
      this.userService.loggedUserRole="";
      this.router.navigate(['/']);
    }
  
 

}
