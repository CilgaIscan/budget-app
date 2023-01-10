import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodTypeListComponent } from './payment-method-type-list.component';

xdescribe('PaymentMethodTypeListComponent', () => {
  let component: PaymentMethodTypeListComponent;
  let fixture: ComponentFixture<PaymentMethodTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
