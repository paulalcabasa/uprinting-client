import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable()

export class CsrfService
{
    private apiUrl = environment.app.api_url;

    constructor(private http: HttpClient) {}

    getCsrfToken(formName) {
        let url = this.apiUrl + '/csrf';
        return this.http.post<any>(url, {formName : formName}).pipe(
            catchError((error : any) => observableThrowError(error)));
    }


}