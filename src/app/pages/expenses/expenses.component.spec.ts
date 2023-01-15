import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { ExpensesComponent } from './expenses.component';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;
  let element: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have info text', () => {
    const texts = element.queryAll(By.css('p'));
    expect(texts[0].nativeElement.textContent).toBe('Welcome the expense management page! You can add, list, edit and delete expensess in the system.');
  });

  it('should have add new expense button and target is correct', () => {
    const buttons = element.queryAll(By.css('a'));
    expect(buttons[0].nativeElement.textContent).toBe('Add a new expense');
    expect(buttons[0].nativeElement.getAttribute('routerlink')).toBe('/expenses/new');
  });

  it('should redirect to new expense form when button clicked', waitForAsync(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();

    const buttons = element.queryAll(By.css('a'));
    buttons[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/expenses/new');
    })
  }));

  it('should have app-expense-list component', () => {
    const explComponent = element.query(By.css('app-expense-list'));
    expect(explComponent).toBeTruthy();
  });
});
