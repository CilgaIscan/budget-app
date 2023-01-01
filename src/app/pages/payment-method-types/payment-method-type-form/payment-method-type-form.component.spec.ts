import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodTypeFormComponent } from './payment-method-type-form.component';

describe('PaymentMethodTypeFormComponent', () => {
  let component: PaymentMethodTypeFormComponent;
  let fixture: ComponentFixture<PaymentMethodTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
