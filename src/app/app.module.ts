import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import { SliderComponent } from './slider/slider.component';
import { CouponComponent } from './coupon/coupon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddressComponent } from './address/address.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TDFFormsComponent } from './tdfforms/tdfforms.component';
import { MDFFormsComponent } from './mdfforms/mdfforms.component';
import { PaymentModule } from './payment/payment.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SliderComponent,
    CouponComponent,
    ProductComponent,
    NavBarComponent,
    ProductDetailsComponent,
    AddressComponent,
    HeaderComponent,
    TDFFormsComponent,
    MDFFormsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
