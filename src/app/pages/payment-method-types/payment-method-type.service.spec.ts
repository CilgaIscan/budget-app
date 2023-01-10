import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PaymentMethodTypeService } from './payment-method-type.service';
import { PaymentMethodTypes } from 'src/app/mock-data/payment-method-types';

describe('PaymentMethodTypeService', () => {
  let service: PaymentMethodTypeService;
  let testingController: HttpTestingController;
  const baseUrl = 'http://192.168.0.21:8000/api/payment-method-types';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PaymentMethodTypeService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get all payment method types', () => {
    service.getAll().subscribe(pmts => {
      expect(pmts).toBeTruthy();
      expect(pmts.length).toBe(2);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(PaymentMethodTypes));
  });

  it('should be able to get payment method type by id', () => {
    service.getById('1').subscribe(pmt => {
      expect(pmt).toBeTruthy();
      expect(pmt.name).toBe('Cash');
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(PaymentMethodTypes[1]);
  });

  it('should be able to create payment method type', () => {
    const newBody = { name: 'Gift Card' };

    service.create(newBody).subscribe(pmt => {
      expect(pmt).toBeTruthy();
      expect(pmt.name).toBe(newBody.name);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('POST');
    const response = {
      ...PaymentMethodTypes[1],
      name: newBody.name,
      id: 3
    };
    mockReq.flush(response);
  });

  it('should be able to update payment method type by id', () => {
    const changes = { name: 'Credit Card' };

    service.update('2', changes).subscribe(pmt => {
      expect(pmt).toBeTruthy();
      expect(pmt.name).toBe(changes.name);
    });

    const mockReq = testingController.expectOne(baseUrl + "/2");
    expect(mockReq.request.method).toBe('PUT');
    const response = {
      ...PaymentMethodTypes[2],
      name: changes.name,
      id: 3
    };
    mockReq.flush(response);
  });

  it('should be able to delete payment method type', () => {
    service.delete('1').subscribe(pmt => {
      expect(pmt).toBeFalsy();
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('DELETE');
    mockReq.flush('');
  });
});
