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

  /** Call the api in backend to retrieve all the users in the database */
  getCourse(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/courses/get"
    );
  }


  /** Call the api in backend to get the top3 rated courses from the database */
  getTop3():any
  {
    return this.http.get(
      "http://localhost:8080/courses/top"
    );
  }


  /** Call the api in backend to get the user's enrolled courses */
  getMyCourse():any{
    return this.http.get(
      "http://localhost:8080/enrollments/get"
    );
  }


  /** Call the api in backend to save the user details to the database */
  getSearchCourse(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/courses/get"
    );
  }


  /** Call the api in backend to get all the assessments */
  getAssessments():any{
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/assessment/get"
    );
  }
 
  /** Call the api in backend to save the course details to the database */
  postCourse(data:Course):Observable<Course>{
    console.log("here")
    return this.http.post<Course>(
      "http://localhost:8080/courses/addCourse",data
    );
  }


  /** Call the api in backend to delete the course */
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
