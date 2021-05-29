import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./component/products.component";
import { ProductDetailsComponent } from "./component/product-details.component"

export const ProductRoutes = RouterModule.forChild([
    {
        path : '',
        component : ProductsComponent
    },
    {
        path : 'product/details/:product_id',
        component : ProductDetailsComponent
    }
]);