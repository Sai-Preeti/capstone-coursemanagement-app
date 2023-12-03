import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  users:any[]=[];
  constructor(private userService:UserService,
    private router: Router)
  {
      this.loginForm=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  

  ngOnInit()
  {
    this.userService.getLoginData().subscribe(
      (data: any) => {
        console.log(data);
        this.users=data;
      },
      (er:any) => {
        console.error(er);
      }
    );

    
  }

  /** Function to authenticate the user and navigate to appropriate page */
  login()
  {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    this.userService.getLoginData().subscribe(
      (data: any) => {
        console.log(data);
        this.users=data;
        this.userService.userLen=this.users.length;
      },
      (er:any) => {
        console.error(er);
      }
    );
    let index=this.users.findIndex((o)=>o.email==this.loginForm.value.email && o.password==this.loginForm.value.password);
    console.log(index);
    if(index!=-1)
    {
      console.log("here");
      let userInfo={
        name:this.users[index].name,
        role:this.users[index].role
      }
      window.localStorage.setItem('user',JSON.stringify(userInfo));
      this.userService.loggedUser=this.users[index].name;
      this.userService.loggedUserRole=this.users[index].role;
      console.log(this.users[index].role)
      if(this.users[index].role!="INSTRUCTOR")
      this.router.navigate(['/home']);
      if(this.users[index].role=="INSTRUCTOR")
      this.router.navigate(['/Ihome']);
    }
    else
    {
      alert("Invalid credentials")
    } 
  }

 
  
}
