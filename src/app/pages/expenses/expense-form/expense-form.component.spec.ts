import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FakeCategoryService } from 'src/app/mock-data/categories';
import { FakeExpenseService } from 'src/app/mock-data/expenses';
import { FakePmService } from 'src/app/mock-data/payment-methods';
import { CategoryService } from '../../categories/category.service';
import { PaymentMethodService } from '../../payment-methods/payment-method.service';
import { ExpenseService } from '../expense.service';

import { ExpenseFormComponent } from './expense-form.component';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseFormComponent],
      providers: [
        {
          provide: PaymentMethodService,
          useClass: FakePmService,
        },
        {
          provide: ExpenseService,
          useClass: FakeExpenseService,
        },
        {
          provide: CategoryService,
          useClass: FakeCategoryService,
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Save and Cancel buttons', () => {
    const buttons = element.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toBe('Cancel');
    expect(buttons[1].nativeElement.textContent).toBe('Save');
  });

  // TODO: Add test for form validation.
});
