import { Location } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { routes } from 'src/app/app-routing.module';
import { TRANSLATIONS } from 'src/app/mock-data/translations';

import { PaymentMethodTypesComponent } from './payment-method-types.component';

@Component({'selector': 'app-payment-method-type-list'})
class MockPaymentMethodTypeListComponent {}

describe('PaymentMethodTypesComponent', () => {
  let component: PaymentMethodTypesComponent;
  let fixture: ComponentFixture<PaymentMethodTypesComponent>;
  let element: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaymentMethodTypesComponent, 
        MockPaymentMethodTypeListComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        TranslateTestingModule.withTranslations(TRANSLATIONS),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypesComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have info text', () => {
    const texts = element.queryAll(By.css('p'));
    expect(texts[0].nativeElement.textContent).toBe('Welcome the payment method type management page! You can add, list, edit and delete payment method types in the system.');
  });

  it('should have add new pmt button and target is correct', () => {
    const buttons = element.queryAll(By.css('a'));
    expect(buttons[0].nativeElement.textContent).toBe('Add a new payment method type');
    expect(buttons[0].nativeElement.getAttribute('routerlink')).toBe('/payment-method-types/new');
  });

  it('should redirect to new pmt form when button clicked', waitForAsync(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();

    const buttons = element.queryAll(By.css('a'));
    buttons[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/payment-method-types/new');
    })
  }));

  it('should have app-payment-method-type-list component', () => {
    const pmtlComponent = element.query(By.css('app-payment-method-type-list'));
    expect(pmtlComponent).toBeTruthy();
  });
});
