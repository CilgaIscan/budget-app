import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { ExpenseFormComponent } from './pages/expenses/expense-form/expense-form.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PaymentMethodTypeFormComponent } from './pages/payment-method-types/payment-method-type-form/payment-method-type-form.component';
import { PaymentMethodTypesComponent } from './pages/payment-method-types/payment-method-types.component';
import { PaymentMethodFormComponent } from './pages/payment-methods/payment-method-form/payment-method-form.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';

export const routes: Routes = [
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/edit/:id', component: CategoryFormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expenses/new', component: ExpenseFormComponent },
  { path: 'expenses/edit/:id', component: ExpenseFormComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'payment-methods/new', component: PaymentMethodFormComponent },
  { path: 'payment-methods/edit/:id', component: PaymentMethodFormComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  { path: 'payment-method-types/new', component: PaymentMethodTypeFormComponent },
  { path: 'payment-method-types/edit/:id', component: PaymentMethodTypeFormComponent },
  { path: 'payment-method-types', component: PaymentMethodTypesComponent },
  { path: '', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
