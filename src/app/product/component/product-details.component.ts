import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { ProductService } from '../service/product.service'

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

	product : any = {};
	qty: any;

    constructor(
		private ActivatedRoute: ActivatedRoute,
        private productService : ProductService,
		private cartService: CartService){}

    ngOnInit()
    {
		this.qty = 1;
		let product_id = this.ActivatedRoute.snapshot.params['product_id'];
		this.productService.getProduct(product_id).subscribe(
			success => {
				this.product = success.product;
			},
			error => {}
    	);
    }

	addToCart(product)
	{
		this.cartService.setCartItem(product, this.qty);
	}

}
