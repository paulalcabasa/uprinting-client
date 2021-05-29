import { RouterModule } from "@angular/router";
import { CartComponent } from "./component/cart.component";

export const CartRoutes = RouterModule.forChild([
    {
        path : 'cart',
        component : CartComponent
    }
]);