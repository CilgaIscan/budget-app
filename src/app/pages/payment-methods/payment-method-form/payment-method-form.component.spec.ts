import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { FakePmtService } from 'src/app/mock-data/payment-method-types';
import { FakePmService } from 'src/app/mock-data/payment-methods';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentMethodTypeService } from '../../payment-method-types/payment-method-type.service';
import { PaymentMethodService } from '../payment-method.service';

import { PaymentMethodFormComponent } from './payment-method-form.component';

describe('PaymentMethodFormComponent', () => {
  let component: PaymentMethodFormComponent;
  let fixture: ComponentFixture<PaymentMethodFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethodFormComponent],
      providers: [
        {
          provide: PaymentMethodService,
          useClass: FakePmService,
        },
        {
          provide: PaymentMethodTypeService,
          useClass: FakePmtService,
        }
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
