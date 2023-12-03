import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) {}

  /** Call the api in backend to save the feedback details to the database */
  postFeedback(data:any):Observable<any>
  {
      console.log("here")
      console.log(data)
      return this.http.post<any>(
        "http://localhost:8080/feedbacks/addFeedback",data
      );
  }

  /** Call the api in backend to retrieve all the feedbacks from the database */
  getFeedback():Observable<any>{
    return this.http.get<any>(
      "http://localhost:8080/feedbacks/get"
    );
  }
}
