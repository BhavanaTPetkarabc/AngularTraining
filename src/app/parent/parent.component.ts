import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  productName: string;
  productQty: string;
  interestOfCustomer: string;
  constructor() {
    this.productName = '';
    this.productQty = '';
    this.interestOfCustomer = 'NA';
  }

  sendTheValuesToChild(pName: any, pQty: any) {
    this.productName = pName;
    this.productQty = pQty;
  }
  ReceiveInterestValue(e: any) {
    console.log(e);
    this.interestOfCustomer = e;
  }
}
