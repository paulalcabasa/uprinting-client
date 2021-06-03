import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/service/auth.service';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	credentials: any = {};
	error: String;

	constructor(
		private http: HttpClient,	
		private authService : AuthService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {

	}

	login(credentials) {
		let url = environment.app.api_url + '/auth';
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		return this.http.post<any>(url, credentials).subscribe(
			data => {
				this.authService.setAccessToken(data.token);
				window.location.href = returnUrl;
				//this.router.navigate([returnUrl]);
			},
			error => {
				this.error = 'Invalid username or password';
			}
		);
           
	}

}

