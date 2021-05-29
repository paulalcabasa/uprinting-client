import { RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login.component";
import { RegisterComponent } from "./component/register.component";
import { HomeComponent } from "./component/home.component";
export const CustomerRoutes = RouterModule.forChild([
    {
        path : 'customer',
        component : HomeComponent
    },
   
]);