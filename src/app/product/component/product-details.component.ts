import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
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
		private router: Router,
		private authService: AuthService){}

    ngOnInit() {
		this.qty = 1;
		let product_id = this.ActivatedRoute.snapshot.params['product_id'];
		if(product_id){
			this.productService.getProduct(product_id).subscribe(
				success => {
					this.product = success.product;
				},
				error => {}
			);
		}
    }

	addToCart(product) {
		
		if(!this.qty){
			alert("Please enter quantity");
		}

		let cartItem : any = {
			product : product,
			quantity : this.qty,
			customerId : 0
		}

		if(this.authService.getAccessToken()) {
			cartItem.customerId = this.authService.parseAccessTokenData().data.customer_id;
		}
	
		this.cartService.addToCart(cartItem).subscribe(
			success => { 
				if(success.state) {
					localStorage.setItem('cartId', success.cartId);
					this.router.navigate(['/cart']);
				} else {
					alert(success.message);
				}
				console.log(success);
			},
			error => {
				console.log(error);
			}
		);
	}

}
