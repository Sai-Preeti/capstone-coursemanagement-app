import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  courses=[];
  totalCourses:number=0;

  constructor(private http:HttpClient) { 
    this.courses=this.getCourse();
  }

  getCourse(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/courses/get"
    );
  }

  getTop3():any
  {
    return this.http.get(
      "http://localhost:8080/courses/top3"
    );
  }

  getMyCourse():any{
    return this.http.get(
      "http://localhost:8080/enrollments/get"
    );
  }
  getSearchCourse(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/courses/get"
    );
  }

  getAssessments():any{
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/assessment/get"
    );
  }
 
  postCourse(data:Course):Observable<Course>{
    console.log("here")
    return this.http.post<Course>(
      "http://localhost:8080/courses/addCourse",data
    );
  }

  deleteCourse(id:String):Observable<any>{
    console.log("here")
    console.log(id);
    const obj={
      "id":id
    }
    const options={
      body:obj
    }
    return this.http.delete(
      "http://localhost:8080/courses/delete", options
    );
  }


}
