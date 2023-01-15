import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from 'src/app/app-routing.module';
import { Categories, FakeCategoryService } from 'src/app/mock-data/categories';
import { CategoryService } from '../category.service';

import { CategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule, MatTableModule],
      providers: [
        { provide: CategoryService, useClass: FakeCategoryService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
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
      expect(cells[0].nativeElement.innerHTML.trim()).toBe(Categories[1].name);
      expect(cells[1].nativeElement.innerHTML.trim()).toBe(Categories[1].icon);
      expect(cells[2].nativeElement.innerHTML.trim()).toBe(Categories[1].color);
      expect(cells[3].queryAll(By.css('button'))[0].nativeElement.textContent).toBe('Delete');
      expect(cells[3].queryAll(By.css('button'))[1].nativeElement.textContent).toBe('Edit');

      done();
    })
  });

  // TODO: Add test for delete button
  // TODO: Add test for edit button
});
