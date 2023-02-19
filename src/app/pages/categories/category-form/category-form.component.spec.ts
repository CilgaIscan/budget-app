import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { FakeCategoryService } from 'src/app/mock-data/categories';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { InputComponent } from 'src/app/shared/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryService } from '../../categories/category.service';

import { CategoryFormComponent } from './category-form.component';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoryFormComponent,
      ],
      providers: [
        {
          provide: CategoryService,
          useClass: FakeCategoryService,
        },
      ],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        TranslateTestingModule.withTranslations(TRANSLATIONS),
      ],
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
    expect(buttons[1].nativeElement.textContent).toBe('Cancel');
    expect(buttons[2].nativeElement.textContent).toBe('Save');
  });

  // TODO: Add test for form validation.
});
