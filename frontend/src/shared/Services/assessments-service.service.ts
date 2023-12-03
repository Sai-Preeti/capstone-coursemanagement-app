import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Question {
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswers?: string[];
}
interface Assessment {
  title: string;
  questions: Question[];
}


@Injectable({
  providedIn: 'root'
})
export class AssessmentsServiceService {

  assessments:any;
  index:number;
  constructor(private http:HttpClient) {
    this.index=0;
   }

    
   /** Call the api in backend to get all the assessments from the database */
  getAssessmentData(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/assessment/get"
    );
  }
   

}