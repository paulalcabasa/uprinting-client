import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.css']
})
export class HeaderComponent implements OnInit {

	public user: any;
	
	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.user = this.authService.parseAccessTokenData().data;
	}

	onClick()
	{
		console.log("clicked link");
		this.router.navigate(['/']);
  	}

	logout()
	{
		this.authService.deleteAccessToken();
		window.location.href="/";
		//this.router.navigate(['/']);
	}

}
