import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";

@Component({
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

	public products : any = [];

	constructor(private productService: ProductService) { }

	ngOnInit() {
		// this.products = this.ProductService.getProducts().subscribe(
        //     products => {
        //         this.products = products;
        //         console.log("Products inside: ", products);
        //     }
        // )
		this.products = this.productService.getProducts();
        console.log("List of products" , this.products);
        console.log("Products Loaded");
	}

}
