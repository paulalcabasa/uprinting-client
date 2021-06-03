import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../../auth/service/auth.service';
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

	  ) { }

	ngOnInit() {
	}

	register(form)
	{
		this.customerService.createCustomer(form).subscribe(
			data => {
				if(!data.state){
					this.errors = data.errors;
					return;
				}

				this.authService.setAccessToken(data.token);
			},
			error => {}
		)
	}


}
