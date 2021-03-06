import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()

export class CustomerService
{
    private apiUrl = environment.app.api_url;

    constructor(private http: HttpClient) {}

    createCustomer(customer) {
        let url = this.apiUrl + '/customer';
        return this.http.post<any>(url, customer).pipe(
            catchError((error : any) => observableThrowError(error)));
    }


}