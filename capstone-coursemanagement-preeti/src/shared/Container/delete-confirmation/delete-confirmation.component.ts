import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CourseService } from '../../Services/course.service';
@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  dialogTitle: string;
  dialogId:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private service:CourseService) {
    this.dialogTitle = data.name;
    this.dialogId = data.id;
    console.log(this.dialogTitle)
    console.log(this.dialogId)
  }
  deleteCourse()
  {
    console.log(this.data.id)
    this.service.deleteCourse(this.data.id).subscribe((response:any)=>{
      console.log("dialog res" ,response)
    });
  }

}
