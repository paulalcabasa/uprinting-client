import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable()

export class OrderService
{

    constructor(private http: HttpClient) {}

    processOrder(form){
        let url = environment.app.api_url + '/order';
        return this.http.post<any>(url, form).pipe(
            catchError((error : any) => observableThrowError(error)));
    }

    getOrder(jobOrderId){
        let url = environment.app.api_url + '/order/' + jobOrderId;
        return this.http.get<any>(url).pipe(
            catchError((error : any) => observableThrowError(error)));
    }

  
}