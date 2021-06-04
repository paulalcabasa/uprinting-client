import { RouterModule } from "@angular/router";

export const ApplicationRoutes = RouterModule.forRoot(
    [
        {
            path : 'cart',
            loadChildren : 'app/cart/cart.module#CartModule'
        },
        {
            path : '',
            loadChildren : 'app/product/product.module#ProductModule'
        },
        {
            path : 'order',
            loadChildren : 'app/order/order.module#OrderModule'
        },
        {
            path : 'customer',
            loadChildren : 'app/customer/customer.module#CustomerModule'
        },
    ],
    //{ useHash: true }
);
