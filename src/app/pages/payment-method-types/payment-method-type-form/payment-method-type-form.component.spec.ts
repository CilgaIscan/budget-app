import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FakePmtService } from 'src/app/mock-data/payment-method-types';
import { PaymentMethodTypeService } from '../payment-method-type.service';

import { PaymentMethodTypeFormComponent } from './payment-method-type-form.component';

describe('PaymentMethodTypeFormComponent', () => {
  let component: PaymentMethodTypeFormComponent;
  let fixture: ComponentFixture<PaymentMethodTypeFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethodTypeFormComponent],
      providers: [
        {
          provide: PaymentMethodTypeService,
          useClass: FakePmtService,
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypeFormComponent);
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
