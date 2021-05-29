import { NgModule } from "@angular/core";
import { HomeComponent } from "./component/home.component";
import { RegisterComponent } from "./component/register.component";
import { LoginComponent } from "./component/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule  } from '@angular/forms';
import { CustomerRoutes } from "./customer.routes";

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
        
    ],
    exports : [
        
    ]
})

export class CustomerModule {}