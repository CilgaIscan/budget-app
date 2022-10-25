import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CategoriesModule { }
