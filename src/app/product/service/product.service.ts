//import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
//import { environment } from "../../../environments/environment.local";
//import { catchError } from 'rxjs/operators';
//mport { throwError as observableThrowError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//@Injectable()

export class ProductService
{

    private products : any = [];
    constructor()
    {
        this.products = [
            {
                product_id : 1,
                product_name : 'Card',
                product_desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper velit. ',
                price : '20.00',
                product_thumbnail : 'assets/images/products/thumbnails/brochure1.jpg',
                product_image : 'assets/images/products/brochure1.jpg'
            },
            {
                product_id : 2,
                product_name : 'Poster',
                product_desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper velit. ',
                price : '15.00',
                product_thumbnail : 'assets/images/products/thumbnails/brochure2.jpg',
                product_image : 'assets/images/products/brochure2.jpg'
            },
            {
                product_id : 3,
                product_name : 'Brochure',
                product_desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper velit. ',
                price : '17.00',
                product_thumbnail : 'assets/images/products/thumbnails/brochure3.jpg',
                product_image : 'assets/images/products/brochure3.jpg'
            },
        ];
    }

    public getProducts()
    {
        return this.products;
      //  let url = environment.app.api_url + 'product';
        // return this.Http.get(url).pipe(
        //     catchError((error : any) => observableThrowError(error))
        // );
    }

    public getProduct(product_id : number)
    {
      //  console.log(product_id);
     //   let index = this.products.map(product => product.product_id === product_id);
        //let product = this.products.map(product => product_id == product.product_id ? product : '' );
        return this.products[0];
        // console.log(product_id);
        // let url = environment.app.api_url + 'product/' + product_id;
        
        // return this.Http.get(url).pipe(
        //     catchError((error : any) => observableThrowError(error)));
    }
}