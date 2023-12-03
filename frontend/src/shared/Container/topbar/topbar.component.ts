import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  constructor(public userService:UserService,
    private router:Router){}
  
  logout()
  {
    this.userService.loggedUser="";
    this.userService.loggedUserRole="";
    this.router.navigate(['/']);
  }
}
