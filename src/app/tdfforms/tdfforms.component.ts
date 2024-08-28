import { Component } from '@angular/core';

@Component({
  selector: 'app-tdfforms',
  templateUrl: './tdfforms.component.html',
  styleUrls: ['./tdfforms.component.css'],
})
export class TDFFormsComponent {
  sendValues(frmReg: any) {
    let email: String = frmReg.value.txtEmail;
    let password: String = frmReg.value.txtPassword;
    if (email == 's.bv.parthasarathy@accenture.com' && password == 'abc')
      console.log('Valid User');
    else console.log('Invalid user');
  }
}
