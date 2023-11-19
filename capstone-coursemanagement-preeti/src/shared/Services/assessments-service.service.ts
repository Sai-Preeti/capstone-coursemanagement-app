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

  // getAssessment(id: string): Observable<Assessment> {
  //   // Mock assessment data - replace with API call to fetch data from backend
  //   const data: Assessment = {
  //     title: 'Sample Assessment',
  //     questions: [
  //       {
  //         text: 'What is the capital of France?',
  //         type: 'multiple-choice',
  //         options: ['Madrid', 'London', 'Paris', 'Berlin'],
  //         correctAnswers: ['Paris'],
  //       },
  //       {
  //         text: 'True or false: JavaScript is a static language',
  //         type: 'true-false',
  //         correctAnswers: ['false'],
  //       },
  //       {
  //         text: 'What is 2 + 2?',
  //         type: 'short-answer',
  //         correctAnswers: ['4'],
  //       },
  //     ],
  //   };

  //   // Simulate API call delay with setTimeout
  //   return of(data);
  // }
  getAssessmentData(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/assessment/get"
    );
  }
   

}