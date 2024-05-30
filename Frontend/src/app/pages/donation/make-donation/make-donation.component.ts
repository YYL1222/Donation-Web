import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Donation } from 'src/app/Model/Donation';
import { DonationType } from 'src/app/Model/DonationType';
import { Donator } from 'src/app/Model/Donator';
import { AuthenticationPopUpService } from 'src/app/services/authentication-pop-up.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent {
constructor(
  private router:Router,
  private donationService:DonationService,
  private popUpService:AuthenticationPopUpService){}

public formList = new Map<Donation,FormGroup>();
public donor!: Donator;
  //foreach donation type -> create a donation
  //then we map that donation to a form group
  //map <donation,formGroup>

  //forEach donationType -> create a new donation
  //
  ngOnInit(){
    //retrieve donor
    if(localStorage.getItem('donor')!= null){
      let val:any = localStorage.getItem('donor')
      this.donor = JSON.parse(val);
    }
    //Retrieve donation Type List
     this.donationService.retrieveDonationTypes().subscribe({
      next:(data:DonationType[]) =>{
        console.log("Printing Donation Types: "+data);
        this.buildDonationMap(data);
      },
      error:(error:any)=>{
        if(error.status == 403){
          this.popUpService.openPopUp();
        }
      }
    });
    
  }
  buildDonationMap(types:DonationType[]){
    //build map of donations and formgroups
    if(localStorage.getItem('shoppingCart')!=null){
      //retrieve and populate donation fields
      let data:any = localStorage.getItem('shoppingCart');
      let shoppingCart = JSON.parse(data);

      types.forEach((e: DonationType) => {
        var donation = this.createDonation(e);
        shoppingCart.forEach((d:Donation)=>{
          if (donation.donation_types.type_name == d.donation_types.type_name){
            donation = d;
          }
        });
        this.formList.set(donation,new FormGroup({
          amount:new FormControl(donation.amount),
          reoccuringDonation:new FormControl(donation.reoccuringDonation)
        }))
      });
    }
    else{
      types.forEach((e: DonationType) => {
        let donation = this.createDonation(e);
        this.formList.set(donation,new FormGroup({
          amount:new FormControl(donation.amount),
          reoccuringDonation:new FormControl(donation.reoccuringDonation)
        }))
      });
    }
    console.log(this.formList);
  }
  createDonation(donationType:DonationType):Donation{
    return {
      donor: this.donor,
      date: new Date(),
      amount: 0.00,
      donation_types: donationType,
      reoccuringDonation: false
    };
  }
  buildShoppingCart(){
    let shoppingCart:Array<any> = [];
    for (const i of this.formList.entries()){
      i[0].amount = i[1].get('amount')?.value;
      i[0].reoccuringDonation = i[1].get('reoccuringDonation')?.value;
      if(i[1].get('amount')?.value > 0){
        shoppingCart.push(i[0]);
      }
    }
    if(shoppingCart.length > 0){
      localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
      this.continue();
    }
  }
  retrieveShoppingCart(data:any){
    
  }
  continue(){
    this.router.navigate(['/user/checkout']);
  }
  onCancel(){
    localStorage.removeItem('donor');
    //return to user home page
    this.router.navigate(['/user']);
  }
  
}
