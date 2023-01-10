import { TestBed } from '@angular/core/testing';

import { PaymentMethodService } from './payment-method.service';

xdescribe('PaymentMethodService', () => {
  let service: PaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
