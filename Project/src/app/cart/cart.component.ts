import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iprint } from '../Iprint';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myForm = new FormGroup({ 
    firstName: new FormControl('',Validators.required), 
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  cart: Array<Iprint> = [];
total: number = 0;
id: number = 0;
qtty: number =1;

constructor(private CS: CartService){

}
ngOnInit(): void {
  this.cart = this.CS.getCart();
  this.total = this.CS.getTotal();
 
}

clearCart() {
  this.cart = []; //in this way I overright an array with an empty array
  this.CS.clearCart();  
  return this.cart;
  }

  removeItem(id:number){
    this.CS.removeItem(id);
  }


}
