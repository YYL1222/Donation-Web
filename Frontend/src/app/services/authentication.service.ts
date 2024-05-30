import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router) { }
  
  postLogin(cred:any){
    return this.http.post("http://localhost:8080/user/login",cred);
  }
  getCredentials(cred:any){
    return this.http.post("http://localhost:8080/authentication",cred);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(["home"]);
  }

  isLoggedIn(){
    if(localStorage.getItem("accessToken")){
      return true;
    }
    return false;
  }
  isAdmin(){
    if (localStorage.getItem("role") == "admin"){
      return true;
    }
    return false;
  }
}
