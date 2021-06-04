import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service'
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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
		this.cartService.getCartItems().subscribe(
			success => {
				this.cartItems = success;
			},
			error => {}
		);
	}

	computeSubtotal() {
		return this.cartItems
			.reduce((acc, cartItem) => parseFloat(cartItem.price) * (cartItem.qty) + parseFloat(acc), 0);
	}

	removeCartItem(index, cartItem) {
		// delete from database
		this.cartService.removeCartItem(cartItem).subscribe(
			success => {
				// remove to local variable
				console.log(success);
				this.cartItems.splice(index, 1)
			},
			error => {}
		);
	}

	updateQuantity(event, cartItem, index) {

		let params = {
			qty : event,
			product_id : cartItem.product_id,
			cart_item_id : cartItem.cart_item_id,
			unit_price : cartItem.unit_price
		};		
		
		this.cartService.updateCartItemQuantity(params).subscribe(
			success => {
				if(!success.state) {
					alert(success.message);
					this.cartItems[index].qty = 1;	
				}
			},
			error => {
				console.log(error);
			}
		)
	}

	checkOut() {
		this.router.navigate(['/order/shipping']);
	}
}
