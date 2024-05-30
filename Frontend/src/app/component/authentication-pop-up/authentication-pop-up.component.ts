import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-authentication-pop-up',
  templateUrl: './authentication-pop-up.component.html',
  styleUrls: ['./authentication-pop-up.component.css'],
})
export class AuthenticationPopUpComponent {
  message!: string;
  constructor(private authenticationService:AuthenticationService,public dialogRef: MatDialogRef<AuthenticationPopUpComponent>){}
  
  confirm():void{
    this.authenticationService.logout();
    this.dialogRef.close();
  }

}
