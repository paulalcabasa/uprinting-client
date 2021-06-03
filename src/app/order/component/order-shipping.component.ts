import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'order-shipping',
  templateUrl: './order-shipping.component.html'
})
export class OrderShippingComponent implements OnInit {


	form: any = {}
	shippingRates: any;

	constructor(
		private router : Router,
		private http: HttpClient
	) { }

	ngOnInit() {
		let url = environment.app.api_url + '/shipping';
		let body = {
			cart : localStorage.getItem('cart')
		};
        return this.http.post<any>(url, body).subscribe(
			success => {
				this.shippingRates = success.ratesPerMethod;
			},
			error => {}
		);
	}

	processOrder(form)
	{
		// perform validations

		// if validated
		// api to create job order
		// alert
		
		this.router.navigate(['order/confirmation/' + '0001']);
	}

}
