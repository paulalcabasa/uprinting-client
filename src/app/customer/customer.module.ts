import { NgModule } from "@angular/core";
import { HomeComponent } from "./component/home.component";
import { RegisterComponent } from "./component/register.component";
import { LoginComponent } from "./component/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule  } from '@angular/forms';
import { CustomerRoutes } from "./customer.routes";
import { AuthService } from "../auth/service/auth.service";
import { CustomerService } from "./service/customer.service";

@NgModule({
    imports : [
        CommonModule,
        CustomerRoutes,
        FormsModule
    ],
    declarations : [
        HomeComponent,
        RegisterComponent,
        LoginComponent
    ],
    providers : [
        AuthService,
        CustomerService
    ],
    exports : [
        
    ]
})

export class CustomerModule {}