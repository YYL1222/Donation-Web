import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'src/app/Model/Donation';
import { ShoppingCart } from 'src/app/Model/ShoppingCart';
import { AuthenticationPopUpService } from 'src/app/services/authentication-pop-up.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public shoppingCart:any;
  public displayedColumns: string[] = ['Item Description', 'Donation Amount', 'Monthly Recurring','Remove From Cart'];
  constructor(
    private router:Router,
    private donationService:DonationService,
    private popUpService:AuthenticationPopUpService){}

  ngOnInit(){
    this.buildCart();
    if(this.shoppingCart){

    }
    else{
      this.router.navigate(['']);
    }
  }
  buildCart(){
    let data:any = localStorage.getItem('shoppingCart');
    data = JSON.parse(data);
    console.log(data);
    if(data) {
      data.forEach((order:Donation) => {
        console.log(order);
      });
      this.shoppingCart = {
        items:data,
        total:this.getCartTotal(data),
        monthlyTotal:this.getCartMonthlyTotal(data),
      }
      console.log(this.shoppingCart);
    }
  }
  getCartTotal(data:any):Number{
    let sum:Number = 0
    data.forEach((element:any) => {
      let amount:any = parseFloat(element.amount);
      sum = sum + amount;
    });
    return sum 
  } 
  getCartMonthlyTotal(data:any):Number{
    let sum:Number = 0
    data.forEach((element:any) => {
      if(element.reoccuringDonation){
        let amount:any = parseFloat(element.amount);
        sum = sum + amount;
      }
    });
    return sum
  }
  emptyCart(){
    this.shoppingCart.items = [];
    this.shoppingCart.total = 0;
    this.shoppingCart.monthlyTotal = 0;
    localStorage.removeItem('shoppingCart');
  }
  updateCart(){
    //modify the cart data
    //need to parse into shoppingCart.items to modify a specific entry
    this.router.navigate(['/user/makedonation']);
    //modify amount
    //modify if monthly
  }
  removeFromCart(item:any){
    console.log(item);
    this.shoppingCart.items.splice(this.shoppingCart.items.indexOf(item),1);
    console.log(this.shoppingCart.items);
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart.items));
    //rebuild shoppingCart
    this.buildCart();
  }
  proceedToCheckout(){
    //save all Donation records
    //return to home page
    //send email to user_email 
    //let donorEmail = this.shoppingCart.items[0].donor.email;
    this.shoppingCart.items.forEach((item:Donation)=>{
      this.donationService.postDonation(item).subscribe({
        next: (data:any)=>{
          console.log(data);    
        },
        error: (error:any)=>{
          console.log(error);
          if(error.status == 403){
            this.popUpService.openPopUp();
          }
        }
      });
    })
    //this all happens after donations are sent to server

    this.donationService.cleanUpLocalStorage();
    this.router.navigate(['/user']);
  }
  continueShopping(){
    //return to Make-Donation
    this.router.navigate(['/user/makedonation'])
  }
}
