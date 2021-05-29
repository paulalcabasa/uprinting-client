import { NgModule } from "@angular/core";
import { CartComponent } from "./component/cart.component";
import { CartRoutes } from "./cart.routes";
import { CommonModule } from "@angular/common";
import { CartService } from './service/cart.service';
import { FormsModule  } from '@angular/forms';

@NgModule({
    imports : [
        CommonModule,
        CartRoutes,
        FormsModule
    ],
    declarations : [
        CartComponent
    ],
    providers : [
        CartService
    ],
    exports : [
        CartComponent
    ]
})

export class CartModule {}