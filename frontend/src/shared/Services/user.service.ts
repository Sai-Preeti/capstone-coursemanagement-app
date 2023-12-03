import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{
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


  /** Call the api in backend to save the user details to the database */
  getLoginData(): any {
    console.log("in normal api")
    return this.http.get(
      "http://localhost:8080/users/get"
    );
    
  }

  // login(email: string, password: string) {
  //   return this.http.post('http://localhost:8080/users/authenticate', {
  //     email: email,
  //     password: password
  //   });
  // }

  /** Call the api in backend to save the user details to the database */
  addUser(data:any):any{
    console.log("add user in service " ,data)
    return this.http.post(
      "http://localhost:8080/users/addUser",data
    )
  }

  
}
