import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service'

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

	public product : any = [];
	public qty: any;

    constructor(private ActivatedRoute: ActivatedRoute,
        private ProductService : ProductService)
    {}

    ngOnInit()
    {
		this.qty = 1;
		let product_id = this.ActivatedRoute.snapshot.params['product_id'];
		this.product = this.ProductService.getProduct(product_id);
        // 
        // this.product = this.ProductService.getProduct(product_id).subscribe(
        //     product => this.product = product
        // );
    	console.log("ProductDetails: ", this.product);
    }

	addToCart(product)
	{
		console.log(product);
	}

}
