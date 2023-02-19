import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExpenseService } from './expense.service';
import { Expenses } from 'src/app/mock-data/expenses';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let testingController: HttpTestingController;
  const baseUrl = 'http://api.hgx2.tercanli.com/api/expenses';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExpenseService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get all expenses', () => {
    service.getAll().subscribe(exps => {
      expect(exps).toBeTruthy();
      expect(exps.length).toBe(2);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(Expenses));
  });

  it('should be able to get expense by id', () => {
    service.getById('1').subscribe(exp => {
      expect(exp).toBeTruthy();
      expect(exp.title).toBe('Rent for January');
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Expenses[1]);
  });

  it('should be able to update expense', () => {
    const changes = {
      title: 'Drinking Out in Starbucks',
      amount: "50",
      paid_at: "",
      store: "Starbucks",
      payment_method: 2,
      category: 2
    };

    service.update("1", changes).subscribe(exp => {
      expect(exp).toBeTruthy();
      expect(exp.title).toBe(changes.title);
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('PUT');
    const response = {
      ...Expenses[1],
      title: changes.title,
      amount: changes.amount,
      store: changes.store,
      paid_at: changes.paid_at,
      payment_method: changes.payment_method,
      category: changes.category
    };
    mockReq.flush(response);
  });


  it('should be able to create expense', () => {
    const newBody = {
      title: 'Eating Out in Jeffs',
      amount: "100",
      paid_at: "",
      store: "Jeff's Burger",
      payment_method: 2,
      category: 2
    };

    service.create(newBody).subscribe(exp => {
      expect(exp).toBeTruthy();
      expect(exp.title).toBe(newBody.title);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('POST');
    const response = {
      ...Expenses[1],
      title: newBody.title,
      amount: newBody.amount,
      store: newBody.store,
      paid_at: newBody.paid_at,
      payment_method: newBody.payment_method,
      category: newBody.category
    };
    mockReq.flush(response);
  });

  it('should be able to delete category', () => {
    service.delete('1').subscribe(exp => {
      expect(exp).toBeFalsy();
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('DELETE');
    mockReq.flush('');
  });
});
