import { DonationType } from "./DonationType";
import { Donator } from "./Donator";

export interface Donation{
    //id is only used when we fetch donations from the server
    //id?:Number;

    donor:Donator,

    date:Date,

    amount:Number,

    donation_types:DonationType,
    
    reoccuringDonation:boolean,
}