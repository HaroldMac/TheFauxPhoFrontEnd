import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOrderStatusComponent } from './check-order-status/check-order-status.component';
import { CheckOrderComponent } from './check-order/check-order.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderSubmittedComponent } from './order-submitted/order-submitted.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavTopComponent,
    MenuComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOrderStatusComponent,
    CheckOrderComponent,
    NavSideComponent,
    OrderSubmittedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Home', component: MainComponent },
      { path: 'Menu', component: MenuComponent },
      { path: 'CheckOrder', component: CheckOrderComponent },
      { path: 'CheckOrderStatus', component: CheckOrderStatusComponent },
      { path: 'ShoppingCart', component: ShoppingCartComponent },
      { path: 'OrderSubmitted', component: OrderSubmittedComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: '**', redirectTo: 'Home', pathMatch: 'full' }

      
    ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


