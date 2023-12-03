import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public userService:UserService,private router:Router){}
  logout()
  {
    this.userService.loggedUser="";
    this.userService.loggedUserRole="";
    this.router.navigate(['/']);
  }
}
