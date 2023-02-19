import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { FakeCategoryService } from 'src/app/mock-data/categories';
import { FakeExpenseService } from 'src/app/mock-data/expenses';
import { FakePmService } from 'src/app/mock-data/payment-methods';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { SharedModule } from 'src/app/shared/shared.module';
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
      ],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        TranslateTestingModule.withTranslations(TRANSLATIONS),
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
    expect(buttons[1].nativeElement.textContent).toBe('Cancel');
    expect(buttons[2].nativeElement.textContent).toBe('Save');
  });

  // TODO: Add test for form validation.
});
