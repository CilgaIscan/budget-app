import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let element: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have info text', () => {
    const texts = element.queryAll(By.css('p'));
    expect(texts[0].nativeElement.textContent).toBe('Welcome the category management page! You can add, list, edit and delete categories in the system.');
  });

  it('should have add new category button and target is correct', () => {
    const buttons = element.queryAll(By.css('a'));
    expect(buttons[0].nativeElement.textContent).toBe('Add a new category');
    expect(buttons[0].nativeElement.getAttribute('routerlink')).toBe('/categories/new');
  });

  it('should redirect to new category form when button clicked', waitForAsync(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();

    const buttons = element.queryAll(By.css('a'));
    buttons[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/categories/new');
    })
  }));

  it('should have app-category-list component', () => {
    const pmlComponent = element.query(By.css('app-category-list'));
    expect(pmlComponent).toBeTruthy();
  });
});
