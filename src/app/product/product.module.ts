import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutes } from "./product.routes";
import { ProductsComponent } from "./component/products.component";
import { ProductComponent } from "./component/product.component";
import { ProductDetailsComponent } from "./component/product-details.component";
import { ProductService } from './service/product.service';
import { ProductDetailsButtonDirective } from "./directive/product-details-button.directive";
import { AddToCartButtonDirective } from "./directive/add-to-cart-button.directive";
import { NumbersOnlyInputDirective } from "./directive/numbers-only-input.directive";
import { FormsModule  } from '@angular/forms';

@NgModule(
    {
        imports : [
            CommonModule,
            FormsModule,
            ProductRoutes
        ],
        declarations : [
            ProductComponent,
            ProductsComponent,
            ProductDetailsComponent,
            ProductDetailsButtonDirective,
            AddToCartButtonDirective,
            NumbersOnlyInputDirective
        ],
        providers : [
            ProductService
        ],
        exports : [
            ProductsComponent
        ]
    }
)
export class ProductModule{}