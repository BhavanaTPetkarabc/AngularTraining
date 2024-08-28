import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDFFormsComponent } from './mdfforms.component';

describe('MDFFormsComponent', () => {
  let component: MDFFormsComponent;
  let fixture: ComponentFixture<MDFFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDFFormsComponent]
    });
    fixture = TestBed.createComponent(MDFFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
