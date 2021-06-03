import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS }      from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routes';
import { CoreModule } from './core/core.module';

import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';

import { AuthService } from './auth/service/auth.service';
import { AuthGuardService } from './auth/service/auth-guard.service';
import { AuthHttpInterceptor } from './auth/interceptor/auth-http.interceptor';

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
	bootstrap: [AppComponent],
	providers: [
		AuthService,
		AuthGuardService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true
		}
	]
})
export class AppModule { }
