import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { UpiComponent } from './upi/upi.component';


@NgModule({
  declarations: [
    CreditCardComponent,
    UpiComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
