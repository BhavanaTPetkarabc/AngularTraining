import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  currentAddress: any;
  permanentAddress: any;
  constructor() {}
  isPermanent(e: any) {
    if (e.target.checked == true) this.permanentAddress = this.currentAddress;
    else this.permanentAddress = '';
  }
}
