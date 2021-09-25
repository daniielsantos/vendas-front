import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product';
import { SharedModule } from './shared';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
