import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
