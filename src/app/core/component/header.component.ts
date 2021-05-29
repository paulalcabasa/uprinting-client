import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'site-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	constructor(private router : Router) { }

	ngOnInit() {
	}

	onClick(){
		console.log("clicked link");
		this.router.navigate(['/']);
  	}

	goToCart()
	{
		this.router.navigate(['/cart']);
	}

	goToLogin()
	{
		this.router.navigate(['/']);
	}

}
