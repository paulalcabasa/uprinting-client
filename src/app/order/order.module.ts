import { NgModule } from "@angular/core";
import { OrderShippingComponent } from "./component/order-shipping.component";
import { OrderConfirmationComponent } from "./component/order-confirmation.component";
import { CommonModule } from "@angular/common";
import { FormsModule  } from '@angular/forms';
import { OrderRoutes } from "./order.routes";

@NgModule({
    imports : [
        CommonModule,
        OrderRoutes,
        FormsModule
    ],
    declarations : [
        OrderShippingComponent,
        OrderConfirmationComponent
    ],
    providers : [
        
    ],
    exports : [
        
    ]
})

export class OrderModule {}