import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { CourseService } from '../../Services/course.service';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data:[2,1,1,0,3,0,0,4,1,0,1,2],
        fill: true,
        tension: 0.5,
        borderColor: '#5d9afc',
        backgroundColor: '#f5fcff',
        pointBackgroundColor:'#a1c5ff',
        pointBorderColor:'#5d9afc'
      }
    ],
    
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false 
        },
        ticks: {
          stepSize: 1
        }
      }
    }
    
    
  };
  public lineChartLegend = true;

  courses:any=[];
  totalCourses:any=[];
  
  constructor(public courseService:CourseService,
    private router:Router,
    public userService:UserService,
    private http:HttpClient){}
    color: any = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    value = 60;
    ngOnInit(): void {
    this.courseService.getTop3().subscribe(
      (data: any) => {
        console.log(data);
        this.courses=data;
        console.log(this.courses[0]);  
      },
      (er:any) => {
        console.error(er);
      }
    );

    this.courseService.getCourse().subscribe((data:any)=>{
      console.log(data)
      this.totalCourses=data;
    })
  }

  viewCourse(id:string)
  {
     console.log(id);
     this.router.navigate(['/viewCourse/'+id], { state: { courses: this.courses }});
  }
}
