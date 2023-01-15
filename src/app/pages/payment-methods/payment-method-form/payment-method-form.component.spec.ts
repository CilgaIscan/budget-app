import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FakePmtService } from 'src/app/mock-data/payment-method-types';
import { FakePmService } from 'src/app/mock-data/payment-methods';
import { PaymentMethodTypeService } from '../../payment-method-types/payment-method-type.service';
import { PaymentMethodService } from '../payment-method.service';

import { PaymentMethodFormComponent } from './payment-method-form.component';

describe('PaymentMethodFormComponent', () => {
  let component: PaymentMethodFormComponent;
  let fixture: ComponentFixture<PaymentMethodFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodFormComponent ],
      providers : [ 
        {
          provide: PaymentMethodService, 
          useClass: FakePmService,
        },
        {
          provide: PaymentMethodTypeService, 
          useClass: FakePmtService,
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodFormComponent);
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
