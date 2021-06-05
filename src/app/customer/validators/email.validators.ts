
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { environment } from "../../../environments/environment";

export class EmailValidators {

   
    
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) 
            return { cannotContainSpace: true }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    
        let url = environment.app.api_url + '/customer/' + control.value;
        // this.http.get<any>(url).pipe().subscribe(
        //     success => {
        //         result.
        //     },
        //     error => {}
        // );
        return { shouldBeUnique: true };
    }

}