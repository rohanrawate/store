import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { ProductsComponent } from '@app/products/products.component';
import { CheckoutComponent } from '@app/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    component: LandingComponent
  }, {
    path: 'products',
    component: ProductsComponent
  }, {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
