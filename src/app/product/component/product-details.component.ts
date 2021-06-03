import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
		private cartService: CartService,
		private router: Router){}

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
		
		let cartItem = {
			product : product,
			quantity : this.qty
		}

		this.cartService.addToCart(cartItem).subscribe(
			success => { 
				if(success.state) {
					localStorage.setItem('cartId', success.cartId);
					this.router.navigate(['/cart']);
				} else {
					alert(success.message);
				}
			},
			error => {
				console.log(error);
			}
		);
	}

}
