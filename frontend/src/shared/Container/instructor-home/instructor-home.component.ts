import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.css']
})
export class InstructorHomeComponent {
  constructor(public userService:UserService,
    public router:Router){}
  logout()
  {
    this.userService.loggedUser="";
    this.userService.loggedUserRole="";
    this.router.navigate(['/']);
  }

}
