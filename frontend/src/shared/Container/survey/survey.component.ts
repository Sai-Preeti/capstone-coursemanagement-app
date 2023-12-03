import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { themeJson } from './theme';
import { json } from "./json";
import "./survey.component.css";
import { Serializer } from "survey-core";
import { CourseService } from '../../Services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { AssessmentsServiceService } from 'src/shared/Services/assessments-service.service';




// Add a custom `score` property to survey questions
Serializer.addProperty("question", {
  name: "score:number"
});
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements AfterViewInit,OnInit{
  // json:any;
  model!: Model;
  surveyResult: any;
  public showSurvey = false;
  yourScore: number=0;
  assessments:any;


  startQuiz(): void {
    const spinnerDiv = document.querySelector('.spinnerDiv') as HTMLElement;
    if (spinnerDiv) {
      spinnerDiv.style.display='block';
    }
    setTimeout(()=>{
      this.showSurvey=true;
      const spinnerDiv = document.querySelector('.spinnerDiv') as HTMLElement;
      if (spinnerDiv) {
        spinnerDiv.innerHTML = '';
      }
    },3000)
    // this.showSurvey = true;
    const buttonDiv = document.querySelector('.ButtonDiv') as HTMLElement;
    if (buttonDiv) {
      buttonDiv.style.display = 'none';
    }
  }

  constructor(private courseService:CourseService,private _snackBar: MatSnackBar,
    public userService:UserService, private router:Router,
    private assessmentService:AssessmentsServiceService){
      
     
   
  }

  
  logout()
  {
    this.userService.loggedUser="";
    this.userService.loggedUserRole="";
    this.router.navigate(['/']);
  }

  ngOnInit()
  {
  
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3 * 1000,
    });
  }
 
  ngAfterViewInit() {

    console.log(this.assessmentService.assessments[this.assessmentService.index])
    console.log(json)
    const survey = new Model(this.assessmentService.assessments[this.assessmentService.index]);
    console.log(survey)
  
    function calculateMaxScore(questions: any[]) {
      var maxScore = 0;
      questions.forEach((question) => {
        if (!!question.score) {
          maxScore += question.score;
        }
      });
      return maxScore;
    }
    
    function calculateTotalScore(data: any) {
      var totalScore = 0;
      Object.keys(data).forEach((qName) => {
        const question = survey.getQuestionByValueName(qName);
        if (question && question.isAnswerCorrect()) {
          if (!!question['score'] && data[qName] !== undefined) {
            totalScore += question['score'];
          }
        }
      });
      return totalScore;
    }
  
    survey.onValueChanged.add((sender, options) => {
      const totalScore = calculateTotalScore(sender.data);
      const maxScore = calculateMaxScore(sender.getAllQuestions());
  
      // Save the scores in survey results
      sender.setValue("maxScore", maxScore);
      sender.setValue("totalScore", totalScore);
      this.yourScore = totalScore; // set the total score in the component
    });
  
    survey.onComplete.add((sender, options) => {
      this.openSnackBar();
      this.surveyResult = sender.data;
      console.log(JSON.stringify(sender.data, null, 3));
      console.log(this.surveyResult);
      this.userService.testScore=this.surveyResult.totalScore;
    });
  
    this.model = survey;
  }
  
}

