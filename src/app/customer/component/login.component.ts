import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/service/auth.service';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { CsrfService } from '../../auth/service/csrf.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	credentials: any = {};
	error: String;
	csrfToken: String;
	private formName = 'login';

	constructor(
		private http: HttpClient,	
		private authService : AuthService,
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

	login(credentials) {
		let url = environment.app.api_url + '/auth';
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		let cartId = this.cartService.getCartId();
		credentials.cartId = cartId;
		credentials.csrfToken = this.csrfToken;
		credentials.formName = this.formName;

		this.http.post<any>(url, credentials).subscribe(
			data => {
				if(data.state)
				this.authService.setAccessToken(data.token);
				window.location.href = returnUrl;
			},
			response => {
				if(response.error.Login.invalidCsrfToken)
					this.error = response.error.Login.invalidCsrfToken;

				if(response.error.Login.incorrectCredentials)
					this.error = response.error.Login.incorrectCredentials;
			}

			
		);   
	}

}

