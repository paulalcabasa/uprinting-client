import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { environment } from "../../../environments/environment";
import { OrderService } from '../../order/service/order.service';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'order-shipping',
  templateUrl: './order-shipping.component.html'
})
export class OrderShippingComponent implements OnInit {

	form: any = {
		shippingMethod : 'Ground'
	};

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
		
        return this.http.get<any>(url).subscribe(
			success => {
				this.shippingRates = success.ratesPerMethod;
			},
			error => {}
		);
	}

	processOrder(form) {
		
		let shippingTotal = this.shippingRates[form.shipping_method];
		form.shipping_total = shippingTotal;
		form.customer_id = this.authService.parseAccessTokenData().data.customer_id;
		form.cart_id = this.cartService.getCartId();

		this.orderService.processOrder(form).subscribe(
			success => {
				if(success.state){
					this.router.navigate(['order/confirmation/' + success.jobOrderId]);
				}
				
				console.log(success);
			},
			error => {

			}
		);

	}

}
