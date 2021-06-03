import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
//import { HttpClient } from "@angular/common/http";
//import { environment } from "../../../environments/environment.local";
import { catchError } from 'rxjs/operators';
//mport { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable()

export class CartService
{

    private cart : any = [];

    constructor(private router: Router){}

    getCartItems()
    {
        if(localStorage.getItem('cart')){
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
        return this.cart;
    }

    setCartItem(product, qty)
    {

        let cart = this.getCartItems();
		
		let index = cart.findIndex(x => x.product_id === product.product_id);
        
		if(index == -1){
            product.qty = qty;
			cart.push(product);
		}
		else {
			cart[index].qty = parseFloat(cart[index].qty) + parseFloat(qty);
		}

        console.log(index);
		localStorage.setItem('cart', JSON.stringify(cart));
        
        this.router.navigate(['/cart']);
    }

    removeCartItem(index)
    {
        let cart = this.getCartItems();
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }


}