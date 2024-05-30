import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("accessToken");
    //let headers = new HttpHeaders().set('Authorization',token);
    if(token){
      const modifiled_req = req.clone({
        headers: req.headers.set('Authorization','Bearer '+token)
      });
      return next.handle(modifiled_req)
    }
    return next.handle(req);
  }
}