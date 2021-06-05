import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { environment } from "../../../environments/environment";
import { OrderService } from '../../order/service/order.service';
import { AuthService } from '../../auth/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'order-shipping',
  templateUrl: './order-shipping.component.html'
})
export class OrderShippingComponent implements OnInit {

	form;

	shippingRates: any;

	constructor(
		private router : Router,
		private http: HttpClient,
		private cartService: CartService,
		private orderService: OrderService,
		private authService: AuthService
	) { }
	
	ngOnInit() {
		let url = environment.app.api_url + '/shipping/' + this.cartService.getCartId();
		
        this.http.get<any>(url).subscribe(
			success => {
				this.shippingRates = success.ratesPerMethod;
			},
			error => {}
		);

		this.form = new FormGroup({
			shipping_name: new FormControl('', [
				Validators.required,
				Validators.maxLength(3),
				Validators.maxLength(35)
			]),
			shipping_address1: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(35)
			]),
			shipping_address2: new FormControl('', [
				Validators.maxLength(35)
			]),
			shipping_address3: new FormControl('', [
				Validators.maxLength(35)
			]),
			shipping_city: new FormControl('', [
				Validators.required,
				Validators.maxLength(35)
			]),
			shipping_state: new FormControl('', [
				Validators.required,
				Validators.maxLength(35)
			]),
			shipping_country: new FormControl('', [
				Validators.required,
				Validators.maxLength(35)
			]),
			shipping_method: new FormControl('Ground'),
		});
	}

	get shippingName() {
		return this.form.get('shipping_name');
	}

	get shippingAddress1() {
		return this.form.get('shipping_address1');
	}

	get shippingAddress2() {
		return this.form.get('shipping_address2');
	}

	get shippingAddress3() {
		return this.form.get('shipping_address3');
	}

	get shippingCity() {
		return this.form.get('shipping_city');
	}

	get shippingState() {
		return this.form.get('shipping_state');
	}

	get shippingCountry() {
		return this.form.get('shipping_country');
	}



	processOrder(form) {
		
		let shippingTotal = this.shippingRates[form.shipping_method];
		form.shipping_total = shippingTotal;
		form.customer_id = this.authService.parseAccessTokenData().data.customer_id;
		form.cart_id = this.cartService.getCartId();

		this.orderService.processOrder(form).subscribe(
			success => {
				if(success.state){
					this.cartService.deleteCart();
					this.router.navigate(['order/confirmation/' + success.jobOrderId]);
				}
				else {
					alert(success.message);
				}
				
				console.log(success);
			},
			error => {

			}
		);

	}

}
