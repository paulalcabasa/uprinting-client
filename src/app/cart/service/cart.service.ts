//import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
//import { environment } from "../../../environments/environment.local";
//import { catchError } from 'rxjs/operators';
//mport { throwError as observableThrowError, Observable } from 'rxjs';

//@Injectable()

export class CartService
{

    private cart : any = [];
    constructor()
    {
        this.cart = [
            {
                product_id : 1,
                product_name : 'Card',
                product_desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper velit. ',
                price : '20.00',
                product_thumbnail : 'assets/images/products/thumbnails/brochure1.jpg',
                product_image : 'assets/images/products/brochure1.jpg',
                qty : 1,
                cart_id : 1
            },
            {
                product_id : 2,
                product_name : 'Poster',
                product_desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper velit. ',
                price : '15.00',
                product_thumbnail : 'assets/images/products/thumbnails/brochure2.jpg',
                product_image : 'assets/images/products/brochure2.jpg',
                qty : 5,
                cart_id : 1
            }
        ];
    }

    public getCartItems()
    {
        return this.cart;
      //  let url = environment.app.api_url + 'product';
        // return this.Http.get(url).pipe(
        //     catchError((error : any) => observableThrowError(error))
        // );
    }

}