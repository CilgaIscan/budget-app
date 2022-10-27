import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MaterialModule } from 'src/material.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CategoriesModule { }
