import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { LoginComponent } from './Container/login/login.component';
import { RegisterComponent } from './Container/register/register.component';
import { HomeComponent } from './Container/home/home.component';
import { WelcomeComponent } from './Container/welcome/welcome.component';
import { InstructorHomeComponent } from './Container/instructor-home/instructor-home.component';
import { CoursesComponent } from './Container/courses/courses.component';
import { AddCourseComponent } from './Container/add-course/add-course.component';
import { ViewCourseComponent } from './Container/view-course/view-course.component';
import { DeleteConfirmationComponent } from './Container/delete-confirmation/delete-confirmation.component';
import { SidebarComponent } from './Container/sidebar/sidebar.component';
import { TopbarComponent } from './Container/topbar/topbar.component';
import { FeedbackComponent } from './Container/feedback/feedback.component';
import { ReportissueComponent } from './Container/reportissue/reportissue.component';
import { MycoursesComponent } from './Container/mycourses/mycourses.component';
import { VideogularComponent } from './Container/videogular/videogular.component';
import { AssesmentsComponent } from './Container/assesments/assesments.component';
import { SurveyComponent } from './Container/survey/survey.component';
import { SnackbarComponent } from './Container/snackbar/snackbar.component';
import { DashboardComponent } from './Container/dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { SurveyModule } from 'survey-angular-ui';
import { NgxStarsModule } from 'ngx-stars';
import { NgChartsModule } from 'ng2-charts';
import { ChatComponent } from './Container/chat/chat.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WelcomeComponent,
    InstructorHomeComponent,
    CoursesComponent,
    AddCourseComponent,
    ViewCourseComponent,
    DeleteConfirmationComponent,
    SidebarComponent,
    TopbarComponent,
    FeedbackComponent,
    ReportissueComponent,
    MycoursesComponent,
    VideogularComponent,
    AssesmentsComponent,
    SurveyComponent,
    SnackbarComponent,
    DashboardComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SurveyModule,
    NgxStarsModule,
    NgChartsModule
   

  ],
  exports:[
   
  ]
})
export class SharedModule { }
