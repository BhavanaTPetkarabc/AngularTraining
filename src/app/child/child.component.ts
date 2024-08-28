import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() pName: any;
  @Input() pQty: any;
  @Output() pdtEvent = new EventEmitter();
}
