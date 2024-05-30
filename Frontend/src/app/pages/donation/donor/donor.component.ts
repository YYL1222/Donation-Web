import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Donator } from 'src/app/Model/Donator';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent {

  constructor(
    private router:Router,
    private donationService:DonationService){}

  donorForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    cma: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    urbanization: new FormControl(),
  });

  onSubmit(){
    //on submit we want to send the donor form to the server 
    //and send to shopping cart and redirect to cart
    console.log(this.donorForm.value);
    localStorage.setItem('donor', JSON.stringify(this.donorForm.value));
    this.router.navigate(['/user/makedonation']);
  }
  onCancel(){
    //return to previous page
    console.log("cancel");
    this.donationService.cleanUpLocalStorage();
    this.router.navigate(['/user']);
  }
}
