import { Component, OnInit } from '@angular/core';
import { prints} from '../prints';
import { Iprint } from '../Iprint';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

prints: Array<Iprint> = prints;
available: boolean = true;
print: Iprint = {} as Iprint;
id: number = 0;

ngOnInit(){
  // this.router.navigate(["/"]);
}

constructor(private route: ActivatedRoute,
  private router: Router, private scroller: ViewportScroller, private CS: CartService) {

   }

toBottom(){
  // window.scrollTo(0,2200)
  this.scroller.scrollToAnchor("prints");
}

addToCart(dish:Iprint){

  this.CS.addToCart(dish);
}

}
