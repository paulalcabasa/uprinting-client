import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../../auth/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { CsrfService } from '../../auth/service/csrf.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidators } from '../validators/email.validators';


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	
	errors;
	registerForm;
	private formName: String = 'Register';
	private csrfToken: String = '';

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

		this.registerForm = new FormGroup({
			email: new FormControl('', [
				Validators.required, 
				Validators.email, 
				Validators.minLength(3)
			]),
			password: new FormControl('',[Validators.required]),
			confirm_password: new FormControl('',[Validators.required]),
			company_name: new FormControl(),
			first_name: new FormControl('',[Validators.required]),
			last_name: new FormControl('',[Validators.required]),
		});
	}

	get email() {
		return this.registerForm.get('email');
	}

	get password() {
		return this.registerForm.get('password');
	}

	get confirmPassword() {
		return this.registerForm.get('confirm_password');
	}

	get companyName() {
		return this.registerForm.get('company_name');
	}

	get firstName() {
		return this.registerForm.get('first_name');
	}

	get lastName() {
		return this.registerForm.get('last_name');
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
