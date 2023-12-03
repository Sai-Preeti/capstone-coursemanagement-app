import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { AssessmentsServiceService } from 'src/shared/Services/assessments-service.service';

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.css']
})
export class AssesmentsComponent {
  assessments:any;
 constructor(public userService:UserService,
  private assessmentService:AssessmentsServiceService){
  this.assessmentService.getAssessmentData().subscribe(
    (data: any) => {
      console.log(data);
      this.assessmentService.assessments=data;
      this.assessments=data;
      console.log(this.assessments)
    },
    (er:any) => {
      console.error(er);
    }
  );
 }

 setIndex(i:number){
    this.assessmentService.index=i;
 }

 
 

}
