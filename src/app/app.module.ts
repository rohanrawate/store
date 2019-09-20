import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchBarComponent,
    ProductViewComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
