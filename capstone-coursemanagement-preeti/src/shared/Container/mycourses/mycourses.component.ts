import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../Services/course.service';
import { UserService } from '../../Services/user.service';
import { EnrollmentService } from '../../Services/enrollment.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent {
  courses:any=[];
  allCourses:any=[];
   constructor(private courseService:CourseService,
    public userService:UserService,
    private enrollmentService:EnrollmentService,
    private router: Router,
    private dialog: MatDialog){
     
    }

    ngOnInit()
    {
        if(this.userService.loggedUserRole=='STUDENT')
        {
         this.courseService.getMyCourse().subscribe(
           (data: any) => {
             console.log(data);
             this.courseService.getCourse().subscribe(
              (courseData:any)=>{
                this.allCourses=courseData;
                console.log(this.allCourses);
                console.log(data);
                console.log(this.userService.loggedUser)
                let userEnrollments=data.filter((c:any)=>c.name==this.userService.loggedUser);
                console.log(userEnrollments)
                userEnrollments.forEach((element:any) => {
                console.log(element)
                console.log(courseData)
                let index=courseData.findIndex((e:any)=>element.course_name==e.name)
                console.log(index)
                console.log(this.allCourses[index]);
                if(this.courses.indexOf(this.allCourses[index])==-1)
                this.courses.push(this.allCourses[index]);
               this.userService.numberOfCourses=this.courses.length;
             });
              }
             )
             
           },
           (er:any) => {
             console.error(er);
           }
         );
        }
        if(this.userService.loggedUserRole=='INSTRUCTOR')
        {
              this.courseService.getCourse().subscribe(
               (courseData:any)=>{
                 console.log("course= ",courseData)
                 this.courses=courseData.filter((c:any)=>c.instructor_name==this.userService.loggedUser);
                 console.log(this.courses)
              });
        }        
    }
    
    
    viewCourse(id:string)
    {
       console.log(id);
       this.router.navigate(['/viewCourse/'+id], { state: { courses: this.courses }});
    }

    openDeleteConfirmationDialog(name:string,id:any): void {
      console.log("id in course comp ",id)
        const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
          width: '700px',
          height:'500px',
          data:  {name,id}
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result.data)
          console.log('The dialog was closed');
        });  
    }

    logout()
    {
      this.userService.loggedUser="";
      this.userService.loggedUserRole="";
      this.router.navigate(['/']);
    }

}
