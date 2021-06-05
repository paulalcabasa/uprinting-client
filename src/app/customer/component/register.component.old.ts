import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../../auth/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { CsrfService } from '../../auth/service/csrf.service';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	
	form: any = {}
	errors;
	private formName: String = 'Register';
	private csrfToken: String = '';

	registerForm = new FormGroup({
		email: new FormControl()
	});

  	constructor(
			private customerService: CustomerService,
			private authService: AuthService,
			private router: Router,
			private route: ActivatedRoute,
			private cartService: CartService,
			private csrfService: CsrfService

	  ) { }

	ngOnInit() {
		this.csrfService.getCsrfToken(this.formName).subscribe(
			success => {
				this.csrfToken = success.csrfToken
				console.log(success);
			},
			error => {}
		);
	}

	register(form) {
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		form.cartId = this.cartService.getCartId();
		form.csrfToken = this.csrfToken;
		form.formName = this.formName;

		this.customerService.createCustomer(form).subscribe(
			data => {
				if(!data.state){
					this.errors = data.errors;
					return;
				}

				this.authService.setAccessToken(data.token);
				window.location.href = returnUrl;
				//this.router.navigate(['order/shipping']);

			},
			response => {
				if(response.error.Login.invalidCsrfToken) {
					alert(response.error.Login.invalidCsrfToken);
				}
				console.log(response);
			}
		)
	}


}
