import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { FakePmtService } from 'src/app/mock-data/payment-method-types';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { SharedModule } from 'src/app/shared/shared.module';
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
