import { TestBed } from '@angular/core/testing';

import { PaymentMethodTypeService } from './payment-method-type.service';

xdescribe('PaymentMethodTypeService', () => {
  let service: PaymentMethodTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMethodTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
