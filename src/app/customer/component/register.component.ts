import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../../auth/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	
	form: any = {}
	errors;

  	constructor(
			private customerService: CustomerService,
			private authService: AuthService,
			private router: Router,
			private route: ActivatedRoute

	  ) { }

	ngOnInit() {
	}

	register(form) {
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/#';
		this.customerService.createCustomer(form).subscribe(
			data => {
				if(!data.state){
					this.errors = data.errors;
					return;
				}

				this.authService.setAccessToken(data.token);
				//window.location.href = returnUrl;
				this.router.navigate(['order/shipping']);

			},
			error => {}
		)
	}


}
