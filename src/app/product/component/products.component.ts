import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";
import { environment } from "../../../environments/environment";
@Component({
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

	products : any = [];

	constructor(
		private http: HttpClient,
		private productService : ProductService) { }

	ngOnInit() {

        this.productService.getProducts().subscribe(
			success => {
				this.products = success;
			},
			error => {}
		);

	}

}
