import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodTypesComponent } from './payment-method-types.component';

xdescribe('PaymentMethodTypesComponent', () => {
  let component: PaymentMethodTypesComponent;
  let fixture: ComponentFixture<PaymentMethodTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
