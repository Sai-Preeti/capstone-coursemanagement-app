import { Component } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { UserService } from '../../Services/user.service';
import { EnrollmentService } from '../../Services/enrollment.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses:any=[];
  searchForm:FormGroup;
   constructor(private courseService:CourseService,
    public userService:UserService,
    private enrollmentService:EnrollmentService,
    private router: Router,
    private dialog: MatDialog)
    {
      this.searchForm=new FormGroup({
        search:new FormControl('')
      })
      this.courses=this.courseService.courses;  
      this.courseService.totalCourses=this.courses.length;
    }
   ngOnInit()
   {
    this.searchForm.valueChanges.subscribe((value:any) => {
      console.log("query= ",value)
      if(value=="")
      {
        this.courseService.getCourse().subscribe(
          (data: any) => {
            console.log(data);
            this.courses=data;
            console.log(this.courses[0]);  
          },
          (er:any) => {
            console.error(er);
          }
        );
      }
      else
      {
        this.courseService.getSearchCourse().subscribe(
          (data: any) => {
            let searchByName=data.filter((c:any)=>(c.name!=="")?c.name.toLowerCase().includes(this.searchForm.value.search.toLowerCase()):[]);
            console.log(searchByName)
            let searchByInstructorName=data.filter((c:any)=>c.instructor_name!="" ?c.instructor_name.toLowerCase().includes(this.searchForm.value.search.toLowerCase()):[]);
            if(searchByName.length>0)
            this.courses=searchByName;
            else if(searchByInstructorName.length>0)
            this.courses=searchByInstructorName;
            else
            {
              const searchTerm = this.searchForm.value.search.toLowerCase();
              this.courses = data.filter((course: any) => {
                // Filter the videos array based on the search term
                const filteredVideos = course.videos.filter((video: any) => {
                  // Convert video name to lowercase
                  const videoName = video.name.toLowerCase();
                  return videoName.includes(searchTerm);
                });

                // Only return courses that have at least one video matching the search term
                return filteredVideos.length > 0;
                });
            }
            console.log(this.courses);  
          },
          (er:any) => {
            console.error(er);
          }
        );
      }
    })
    this.courseService.getCourse().subscribe(
      (data: any) => {
        console.log(data);
        this.courses=data;
        console.log(this.courses[0]);  
      },
      (er:any) => {
        console.error(er);
      }
    ); 
    
   }
   
   viewCourse(id:string)
   {
      console.log(id);
      // this.courseService.find(id);
      // this.router.navigate(['/viewCourse/'+id]);
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
        // this.courseService.deleteCourse(result.data).subscribe((response:any)=>{
        //   console.log("dialog res" ,response)
        // });
        console.log('The dialog was closed');
      });  
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(AddCourseComponent, {
        width: '700px',
        height:'500px',
        data: { }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result.data)
        this.courseService.postCourse(result.data).subscribe((response:any)=>{
          console.log("dialog res" ,response)
        });
        console.log('The dialog was closed');
      });  
    }

    enroll(course_name:string,instructor_name:string)
    {
      this.enrollmentService.postEnrollment(this.userService.loggedUser,course_name,instructor_name).subscribe((res:any)=>{
        console.log(res);
      })
    }


}
