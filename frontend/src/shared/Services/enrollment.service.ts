import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private userService:UserService,
    private http:HttpClient) { }

  /** Call the api in backend to save the enrollment details to the database */
  postEnrollment(name:String,course_name:String,instructor_name:String):Observable<any>
  {
    const data={
      name:name,
      course_name:course_name,
      instructor_name:instructor_name
    }
    console.log(data)
    return this.http.post<any>(
      "http://localhost:8080/enrollments/addEnrollment",data
    );
  }
}
