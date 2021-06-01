import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }      from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routes';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApplicationRoutes,
    CartModule,
    CoreModule,
    ProductModule,
    OrderModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
