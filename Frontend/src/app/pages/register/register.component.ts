import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new FormGroup({
    first_name: new FormControl('',[
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    last_name: new FormControl('',[
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    password: new FormControl(),
    email: new FormControl('',[
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ])
  });
  constructor(
    private userService: UserService, 
    private router:Router
  ) {}
  onSubmit() {
    //on submit we want to send the user to their appropriate route
    console.log(this.user.value);
    this.userService.addUser({
      firstname:this.user.get(['first_name'])?.value,
      lastname:this.user.get(['last_name'])?.value,
      email:this.user.get(['email'])?.value,
      password:this.user.get(['password'])?.value,
      roles:{
          id:2,
          role_name:"user"
      }
    }).subscribe({
      error:(error:any) => {
      console.log(error);
      if(error.status === 200)
        this.router.navigate(['/login']);
      }
    })
  }
  onCancel() {
    //return to previous page
  }
}