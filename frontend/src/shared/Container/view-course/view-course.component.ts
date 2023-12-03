import { Component, NgModule, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';
import { VideogularComponent } from '../videogular/videogular.component';
import { VgApiService,VgMediaDirective,VgMediaElement,VgPlayerComponent } from '@videogular/ngx-videogular/core';
import { Subscription } from 'rxjs';


interface Status{
  name:String,
  percentage:number
 }
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
 
 export class ViewCourseComponent{
  preload :string='auto';
  api:VgApiService=new VgApiService;
  id:number;
  courses=[];
  index:any;
  course:any;
  percentages:number[]=[];
  courseStatus:Status;
  duration:number=0;


  @ViewChild('myVideoElement') myVideoElement: ElementRef | undefined;
  percentagePlayed: number = 0;

  constructor(private activeRoute:ActivatedRoute,private courseService:CourseService,private vgApi: VgApiService)
  {
    this.id=this.activeRoute.snapshot.params['id'];
    this.courses = history.state.courses;
    console.log(this.courses);
    this.index=this.courses.findIndex((c:any)=>c.id==this.id);
    this.course=this.courses[this.index];
    for(let i=0;i<this.course.videos.length;i++)
    {
      this.percentages.push(0);
    }
    console.log(this.percentages)
    this.courseStatus={name:'',percentage:0};
  }

  onPlayerReady(source: VgApiService) {
    this.api = source;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe()
    {
    }
  }

  onTimeUpdate() {
    // console.log(i)
    const video = this.myVideoElement?.nativeElement;
    console.log(video)
    const percentage = (100 / video.duration) * video.currentTime;
    console.log(video.duration)
    console.log(video.currentTime)
    this.percentagePlayed = Math.round(percentage);
    console.log(this.percentagePlayed)
  }
  autoplay() {
    this.api.play();
  }


 
  

  }

   
