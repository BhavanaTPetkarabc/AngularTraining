import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdfforms',
  templateUrl: './mdfforms.component.html',
  styleUrls: ['./mdfforms.component.css'],
})
export class MDFFormsComponent {
  frmSignIn: any;
  isFreshRequest: boolean;

  constructor() {
    this.isFreshRequest = true;
    this.frmSignIn = new FormGroup({
      uemail: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      upwd: new FormControl('', Validators.required),
    });
  }
  sendValues() {
    this.isFreshRequest = false;
    console.log(this.frmSignIn.value.uemail);
    console.log(this.frmSignIn.value.upwd);
  }
}
