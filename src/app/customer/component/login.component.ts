import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/service/auth.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

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
		private router: Router
	) { }

	ngOnInit() {

	}

	login(credentials) {
		let url = environment.app.api_url + '/auth';

		return this.http.post<any>(url, credentials).subscribe(
			data => {
				this.authService.setAccessToken(data.token);
				this.router.navigate(['/']);
			},
			error => {
				this.error = 'Invalid username or password';
				//console.log("oops", error)
			}
		);
           
	}

}
function observableThrowError(error: any): import("rxjs").ObservableInput<unknown> {
	throw new Error('Function not implemented.');
}

