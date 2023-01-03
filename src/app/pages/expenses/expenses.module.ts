import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ExpensesComponent } from './expenses.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class ExpensesModule { }
