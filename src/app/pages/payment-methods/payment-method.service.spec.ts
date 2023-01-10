import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PaymentMethodService } from './payment-method.service';
import { PaymentMethods } from 'src/app/mock-data/payment-methods';


describe('PaymentMethodService', () => {
  let service: PaymentMethodService;
  let testingController: HttpTestingController;
  const baseUrl = 'http://192.168.0.21:8000/api/payment-methods';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PaymentMethodService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get all payment methods', () => {
    service.getAll().subscribe(pms => {
      expect(pms).toBeTruthy();
      expect(pms.length).toBe(2);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(PaymentMethods));
  });

  it('should be able to get payment method by id', () => {
    service.getById('2').subscribe(pm => {
      expect(pm).toBeTruthy();
      expect(pm.name).toBe('Golden Boy');
    });

    const mockReq = testingController.expectOne(baseUrl + "/2");
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(PaymentMethods[2]);
  });

  it('should be able to create payment method', () => {
    const newBody = { name: 'MyBenefit', icon: 'gift', type: 2};

    service.create(newBody).subscribe(pm => {
      expect(pm).toBeTruthy();
      expect(pm.name).toBe(newBody.name);
      expect(pm.icon).toBe(newBody.icon);
      expect(pm.type).toBe(newBody.type);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('POST');
    const response = {
      ...PaymentMethods[1],
      name: newBody.name,
      id: 3,
      icon: 'gift',
      type: 2
    }
    mockReq.flush(response);
  });

  it('should be able to update payment method', () => {
    const changes = { name: "Cilga's Card", icon: 'heart', type: 2 };
    service.update('2', changes).subscribe(pm => {
      expect(pm).toBeTruthy();
      expect(pm.icon).toBe(changes.icon);
    });

    const mockReq = testingController.expectOne(baseUrl + "/2");
    expect(mockReq.request.method).toBe('PUT');
    const response = PaymentMethods[2];
    response.name = changes.name;
    response.icon = changes.icon;
    response.type = changes.type;
    mockReq.flush(response);
  });

  it('should be able to delete payment method', () => {
    service.delete('1').subscribe(pm => {
      expect(pm).toBeFalsy();
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('DELETE');
    mockReq.flush('');
  });
});
