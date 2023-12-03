import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router,
    public userService:UserService){}
  navigateToCourse()
  {
    this.router.navigate(['/courses'])
  }

  navigateToMyCourse()
  {
    this.router.navigate(['/myCourses'])
  }


  navigateToAssessments()
  {
    this.router.navigate(['/assessments'])
  }

  navigateToDashboard()
  {
    this.router.navigate(['/dashboard'])
  }

  
}
