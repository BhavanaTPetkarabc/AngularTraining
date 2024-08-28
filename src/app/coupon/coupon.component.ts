import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent {
  coupanCode: string;
  discount: string;
  display: boolean;
  constructor() {
    this.coupanCode = 'X7854E';
    this.discount = '0%';
    this.display = false;
  }
  calculateDiscount() {
    this.discount = '20%';
  }
  toggleDisplay() {
    this.display = !this.display;
  }
}
