import { Location } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { routes } from 'src/app/app-routing.module';
import { TRANSLATIONS } from 'src/app/mock-data/translations';

import { PaymentMethodsComponent } from './payment-methods.component';

@Component({'selector': 'app-payment-method-list'})
class MockPaymentMethodListComponent {}

describe('PaymentMethodsComponent', () => {
  let component: PaymentMethodsComponent;
  let fixture: ComponentFixture<PaymentMethodsComponent>;
  let element: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaymentMethodsComponent, 
        MockPaymentMethodListComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        TranslateTestingModule.withTranslations(TRANSLATIONS),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have info text', () => {
    const texts = element.queryAll(By.css('p'));
    expect(texts[0].nativeElement.textContent).toBe('Welcome the payment method management page! You can add, list, edit and delete payment methods in the system.');
  });

  it('should have add new pm button and target is correct', () => {
    const buttons = element.queryAll(By.css('a'));
    expect(buttons[0].nativeElement.textContent).toBe('Add a new payment method');
    expect(buttons[0].nativeElement.getAttribute('routerlink')).toBe('/payment-methods/new');
  });

  it('should redirect to new pm form when button clicked', waitForAsync(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();

    const buttons = element.queryAll(By.css('a'));
    buttons[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/payment-methods/new');
    })
  }));

  it('should have app-payment-method-list component', () => {
    const pmlComponent = element.query(By.css('app-payment-method-list'));
    expect(pmlComponent).toBeTruthy();
  });
});
