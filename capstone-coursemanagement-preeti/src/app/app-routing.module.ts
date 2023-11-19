import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogularComponent } from '../shared/Container/videogular/videogular.component';
import { LoginComponent } from '../shared/Container/login/login.component';
import { RegisterComponent } from '../shared/Container/register/register.component';
import { HomeComponent } from '../shared/Container/home/home.component';
import { CoursesComponent } from '../shared/Container/courses/courses.component';
import { ViewCourseComponent } from '../shared/Container/view-course/view-course.component';
import { SurveyComponent } from '../shared/Container/survey/survey.component';
import { WelcomeComponent } from '../shared/Container/welcome/welcome.component';
import { DashboardComponent } from '../shared/Container/dashboard/dashboard.component';
import { FeedbackComponent } from '../shared/Container/feedback/feedback.component';
import { ReportissueComponent } from '../shared/Container/reportissue/reportissue.component';
import { InstructorHomeComponent } from '../shared/Container/instructor-home/instructor-home.component';
import { MycoursesComponent } from '../shared/Container/mycourses/mycourses.component';
import { AssesmentsComponent } from '../shared/Container/assesments/assesments.component';
import { ChatComponent } from 'src/shared/Container/chat/chat.component';

const routes: Routes = [
    {
      path:'',
      component:WelcomeComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"home",
      component:HomeComponent
    },
    {
      path:"chat",
      component:ChatComponent
    },
    
    {
    path:'register',
    component:RegisterComponent
    },
    {
      path:'courses',
      component:CoursesComponent
    },
    {
      path:'viewCourse/:id',
      component:ViewCourseComponent
    },
    {
      path:'assessments',
      component:AssesmentsComponent
    },
    {
      path:'startQuiz',
      component:SurveyComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'feedback',
      component:FeedbackComponent
    },
    {
      path:'issue',
      component:ReportissueComponent
    },
    {
      path:'Ihome',
      component:InstructorHomeComponent
    },
    {
      path:'myCourses',
      component:MycoursesComponent
    },
    {
      path:'video',
      component:VideogularComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
