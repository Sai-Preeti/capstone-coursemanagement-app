import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm:FormGroup;
  constructor(private userService:UserService,
    private router:Router){
    this.registerForm=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      role:new FormControl(''),
    })
  }
  registerUser()
  {
    console.log("new register")
    console.log(this.registerForm.value)
    this.userService.addUser(this.registerForm.value).subscribe(
      (data: any) => {
        console.log(data);
      },
      (er:any) => {
        console.error(er);
      }
    );
    this.router.navigate(['','login'])
  }

}
