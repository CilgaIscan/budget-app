import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FakeCategoryService } from 'src/app/mock-data/categories';
import { CategoryService } from '../../categories/category.service';

import { CategoryFormComponent } from './category-form.component';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryFormComponent],
      providers: [
        {
          provide: CategoryService,
          useClass: FakeCategoryService,
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormComponent);
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
