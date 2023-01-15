import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { PaymentMethodTypeListComponent } from './payment-method-type-list/payment-method-type-list.component';
import { PaymentMethodTypeService } from './payment-method-type.service';

import { PaymentMethodTypesComponent } from './payment-method-types.component';

xdescribe('PaymentMethodTypesComponent', () => {
  let component: PaymentMethodTypesComponent;
  let fixture: ComponentFixture<PaymentMethodTypesComponent>;
  let element: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodTypesComponent, PaymentMethodTypeListComponent ],
      imports: [ RouterTestingModule.withRoutes(routes) ],
      providers: [ PaymentMethodTypeService ]
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

  // TODO: Add listing component check.
});
