import { Injectable } from '@angular/core';
import { Iprint } from './Iprint';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Array<Iprint> = [];
  total: number = 0;
  id: number = 0;
  qtty: number =1;

  constructor() { }

 //function to push items to the array
 addToCart(dish: Iprint) {
  this.cart.push(dish);
}

//function to bring all the items
getCart() {
return this.cart;
}

//to empty the cart
clearCart() {
  this.cart = []; //in this way I overright an array with an empty array
    return this.cart;
  }
  
getLength(){
return this.cart.length;
}
//to show the total in the cart
getTotal(){
this.total= 0;
for (let val of this.cart) {
  this.total = this.total + (val.price * val.qtty);
}
return this.total;

}

removeItem(id:number){
this.qtty= 1;
this.cart.splice(id,1);
}

}
