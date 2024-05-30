import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl = 'http://localhost:8080/user';

  public addUser(user:any):Observable<any>{
    /* 
    {
    "name":"user",
    "email":"email",
    "password":"test",
    "roles":{
        "id":1,
        "role_name":"admin"
      }
    }
    */
    return this.httpClient.post(this.baseUrl+'/register',user);
  }

  public getUsers():Observable<any>{
    return this.httpClient.get(this.baseUrl+'/display');
  }

  public deleteUser(userId:Number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+'/delete/'+userId);
  }
  public deleteUserJson(userId:Number,options?: any):Observable<any>{
    return this.httpClient.delete(this.baseUrl+'/delete/'+userId, options);
  }

  public updateUser(user:any):Observable<any>{
    return this.httpClient.put(this.baseUrl+'/update/'+user.id,user);
  }
}
