import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationPopUpComponent } from '../component/authentication-pop-up/authentication-pop-up.component';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationPopUpService implements HttpInterceptor{

  constructor(private dialog: MatDialog) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        err =>
          new Observable<HttpEvent<any>>(observer => {
            if (err instanceof HttpErrorResponse) {
              const errResp = <HttpErrorResponse>err;
              if (errResp.status === 401 || err.status === 403 || err.status === 0) {
                this.openPopUp();
              }
            }
            observer.error(err);
            observer.complete();
          })
      )
    );
    }

    openPopUp(){
      this.dialog.open(AuthenticationPopUpComponent);
    }
}
