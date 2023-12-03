import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  
  constructor(private http:HttpClient) {}

  /** Call the api in backend to save the issue details to the database */
  postIssue(data:any):Observable<any>
  {
      console.log("here")
      console.log(data)
      return this.http.post<any>(
        "http://localhost:8080/issues/addIssue",data
      );
  }

  /** Call the api in backend to retrieve all the isssues */
  getIssue():Observable<any>{
    return this.http.get<any>(
      "http://localhost:8080/issues/get"
    );
  }
}
