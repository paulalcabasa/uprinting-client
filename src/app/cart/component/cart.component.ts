import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service'
import { Router } from '@angular/router';

@Component({
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

	public cartItems: any = [];
	constructor(
		private cartService : CartService,
		private router : Router
	) { }

	ngOnInit() {
		this.cartItems = this.cartService.getCartItems();
	}

	computeSubtotal()
	{
		return this.cartItems
			.reduce((acc, cartItem) => parseFloat(cartItem.price) * (cartItem.qty) + parseFloat(acc), 0);
	}

	removeCartItem(index) 
	{
		this.cartItems.splice(index, 1);
	}

	goToHome()
	{
		this.router.navigate(['/']);
	}

	checkOut()
	{
		this.router.navigate(['/order/shipping']);
	}
}
