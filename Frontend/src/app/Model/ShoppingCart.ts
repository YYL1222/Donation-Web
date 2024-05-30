import { Donation } from "./Donation";
import { DonationType } from "./DonationType";
import { Donator } from "./Donator";

//shopping cart model intended to be used in the checkout process.
export interface ShoppingCart{
    items: Array<Donation>;
    total: Number;
    monthlyTotal: Number;
}