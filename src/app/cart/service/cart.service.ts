
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../auth/service/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable()

export class CartService
{

    private cart : any = [];
    private user;
    
    constructor(
        private router: Router,
        private http: HttpClient,
        private authService : AuthService
    ){}

    getCartId() {
        return localStorage.getItem('cartId');
    }

    getCartItems() {
        
        let cartId = this.getCartId();
        let url = environment.app.api_url + '/cart-items/' + cartId;
        return this.http.get<any>(url).pipe(
            catchError((error : any) => observableThrowError(error)));
        
        
    }

    addToCart(cartItem) {
  
        let url = environment.app.api_url + '/cart';
        let user = this.authService.parseAccessTokenData();

        cartItem.cartId = this.getCartId();
       // cartItem.customerId = user.data.customer_id;
    
        return this.http.post<any>(url, cartItem).pipe(
            catchError((error : any) => observableThrowError(error)));
    }

    removeCartItem(cartItem) {
       
        let url = environment.app.api_url + '/cart-items/' + cartItem.cart_item_id;
        return this.http.delete<any>(url).pipe(
            catchError((error : any) => observableThrowError(error)));
     
    }

    updateCartItemQuantity(cartItem) {
       
        let url = environment.app.api_url + '/cart-items/' + cartItem.cart_item_id;
        return this.http.put<any>(url, cartItem).pipe(
            catchError((error : any) => observableThrowError(error)));
     
    }

    deleteCart() {
        localStorage.removeItem('cartId');
    }


}