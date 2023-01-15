import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FakePmtService, PaymentMethodTypes } from 'src/app/mock-data/payment-method-types';
import { PaymentMethodTypeService } from '../payment-method-type.service';

import { PaymentMethodTypeListComponent } from './payment-method-type-list.component';

describe('PaymentMethodTypeListComponent', () => {
  let component: PaymentMethodTypeListComponent;
  let fixture: ComponentFixture<PaymentMethodTypeListComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethodTypeListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatTableModule],
      providers: [
        {
          provide: PaymentMethodTypeService, 
          useClass: FakePmtService,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodTypeListComponent);
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
      expect(cells[0].nativeElement.innerHTML.trim()).toBe(PaymentMethodTypes[1].name);
      expect(cells[1].queryAll(By.css('button'))[0].nativeElement.textContent).toBe('Delete');
      expect(cells[1].queryAll(By.css('button'))[1].nativeElement.textContent).toBe('Edit');
      
      done();
    })
  });

  // TODO: Add test for delete button
  // TODO: Add test for edit button
});
