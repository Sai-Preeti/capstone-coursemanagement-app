import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  loggedUser:string="";
  loggedUserRole:string="";
  testScore:number=0;
  numberOfCourses:number=0;
  courseStatusArray=[];
  userLen:number=0;
  constructor(private http:HttpClient) {
    let data=window.localStorage.getItem('user');
    if(data)
    {
      let userData=JSON.parse(data);
      this.loggedUser=userData.name;
      this.loggedUserRole=userData.role;
    }
  }

  ngOnInit(): void {
  
  }

  getLoginData(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/users/get"
    );
    
  }

  addUser(data:any):any{
    console.log("add user in service " ,data)
    return this.http.post(
      "http://localhost:8080/users/addUser",data
    )
  }

  
}
