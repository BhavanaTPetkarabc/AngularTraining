import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userName: string;
  alignment: string;
  todayDate: Date;

  constructor() {
    this.userName = 'Bhavana';
    this.alignment = 'right';
    this.todayDate = new Date();
  }
}