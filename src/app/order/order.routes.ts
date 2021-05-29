import { RouterModule } from "@angular/router";
import { OrderShippingComponent } from "./component/order-shipping.component";
import { OrderConfirmationComponent } from "./component/order-confirmation.component";

export const OrderRoutes = RouterModule.forChild([
    {
        path : 'order/shipping',
        component : OrderShippingComponent
    },
    {
        path : 'order/confirmation/:order_id',
        component : OrderConfirmationComponent
    }
]);