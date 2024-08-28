import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { CouponComponent } from './coupon/coupon.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddressComponent } from './address/address.component';
import { MDFFormsComponent } from './mdfforms/mdfforms.component';
import { TDFFormsComponent } from './tdfforms/tdfforms.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { UpiComponent } from './payment/upi/upi.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'all', component: ProductComponent },
  { path: 'coupon', component: CouponComponent },
  { path: 'address', component: AddressComponent },
  { path: 'mdf', component: MDFFormsComponent },
  { path: 'tdf', component: TDFFormsComponent },
  { path: 'all/:pid', component: ProductDetailsComponent },
  { path: 'card', component: CreditCardComponent },
  { path: 'upi', component: UpiComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
