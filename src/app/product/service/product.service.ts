import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()

export class ProductService
{
    private url;
    constructor(private http: HttpClient) {
        this.url = environment.app.api_url;
    }

    getProducts() {
        return this.http.get(this.url + "/product").pipe(
            catchError((error : any) => observableThrowError(error)));
    }

    getProduct(product_id) {
        let url = environment.app.api_url + '/product/' + product_id;
        return this.http.get<any>(url).pipe(
            catchError((error : any) => observableThrowError(error)));
    }
}