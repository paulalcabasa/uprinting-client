import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'order-shipping',
  templateUrl: './order-shipping.component.html'
})
export class OrderShippingComponent implements OnInit {

	constructor(private router : Router) { }

	ngOnInit() {
	}

	processOrder()
	{
		this.router.navigate(['order/confirmation/' + '0001']);
	}

}
