import { RouterModule } from "@angular/router";
import { OrderShippingComponent } from "./component/order-shipping.component";
import { OrderConfirmationComponent } from "./component/order-confirmation.component";
import { AuthGuardService } from "../auth/service/auth-guard.service";

export const OrderRoutes = RouterModule.forChild([
    {
        path : 'order/shipping',
        component : OrderShippingComponent,
        canActivate: [AuthGuardService]
    },
    {
        path : 'order/confirmation/:order_id',
        component : OrderConfirmationComponent,
        canActivate: [AuthGuardService]
    }
]);