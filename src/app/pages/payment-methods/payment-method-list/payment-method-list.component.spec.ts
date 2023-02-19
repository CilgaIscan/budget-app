import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { routes } from 'src/app/app-routing.module';
import { FakePmService, PaymentMethods } from 'src/app/mock-data/payment-methods';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { PaymentMethodService } from '../payment-method.service';

import { PaymentMethodListComponent } from './payment-method-list.component';

describe('PaymentMethodListComponent', () => {
  let component: PaymentMethodListComponent;
  let fixture: ComponentFixture<PaymentMethodListComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethodListComponent],
      imports: [
        RouterTestingModule.withRoutes(routes), 
        TranslateTestingModule.withTranslations(TRANSLATIONS),
        HttpClientTestingModule, 
        MatTableModule,
      ],
      providers: [
        { provide: PaymentMethodService, useClass: FakePmService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodListComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have pmt table with correct content', (done) => {
    fixture.whenStable().then(() => {
      const table = element.queryAll(By.css('table'))[0];
      expect(table.nativeElement).toBeTruthy();

      // headers
      const headers = table.queryAll(By.css('th'));
      expect(headers.map(el => {
        return el.nativeElement.innerHTML.trim().toLowerCase();
      })).toEqual(component.displayedColumns);

      // content
      const cells = table.queryAll(By.css('tbody > tr:nth-child(1) > td'));
      expect(cells[0].nativeElement.innerHTML.trim()).toBe(PaymentMethods[1].name);
      expect(cells[1].nativeElement.innerHTML.trim()).toBe(PaymentMethods[1].icon);
      expect(Number.parseInt(cells[2].nativeElement.innerHTML.trim())).toBe(PaymentMethods[1].type);
      expect(cells[3].queryAll(By.css('button'))[0].nativeElement.textContent).toBe('Delete');
      expect(cells[3].queryAll(By.css('button'))[1].nativeElement.textContent).toBe('Edit');

      done();
    })
  });

  // TODO: Add test for delete button
  // TODO: Add test for edit button
});
