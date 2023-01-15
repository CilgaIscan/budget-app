import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { Expenses, FakeExpenseService } from 'src/app/mock-data/expenses';
import { ExpenseService } from '../expense.service';

import { ExpenseListComponent } from './expense-list.component';

describe('ExpenseListComponent', () => {
  let component: ExpenseListComponent;
  let fixture: ComponentFixture<ExpenseListComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseListComponent],
      imports: [
        RouterTestingModule.withRoutes(routes), HttpClientTestingModule, MatTableModule,
      ],
      providers: [
        { provide: ExpenseService, useClass: FakeExpenseService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseListComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have expense table with correct content', (done) => {
    fixture.whenStable().then(() => {
      const table = element.queryAll(By.css('table'))[0];
      expect(table.nativeElement).toBeTruthy();

      // headers
      const headers = table.queryAll(By.css('th'));
      expect(headers.map(el => {
        return el.nativeElement.innerHTML.trim();
      })).toEqual(['Date', 'Title', 'Category', 'Amount', 'By', 'Store', 'Actions']);

      // content
      const cells = table.queryAll(By.css('tbody > tr:nth-child(1) > td'));
      console.log(cells[0].nativeElement);
      console.log(Expenses[1]);
      expect(cells[0].nativeElement.innerHTML.trim()).toBe(Expenses[1].paid_at);
      expect(cells[1].nativeElement.innerHTML.trim()).toBe(Expenses[1].title);
      expect(Number.parseInt(cells[2].nativeElement.innerHTML.trim())).toBe(Expenses[1].category);
      expect(cells[3].nativeElement.innerHTML.trim()).toBe(Expenses[1].amount);
      expect(Number.parseInt(cells[4].nativeElement.innerHTML.trim())).toBe(Expenses[1].payment_method);
      expect(cells[5].nativeElement.innerHTML.trim()).toBe(Expenses[1].store);

      expect(cells[6].queryAll(By.css('button'))[0].nativeElement.textContent).toBe('Delete');
      expect(cells[6].queryAll(By.css('button'))[1].nativeElement.textContent).toBe('Edit');

      done();
    })
  });

  // TODO: Add test for delete button
  // TODO: Add test for edit button
});
