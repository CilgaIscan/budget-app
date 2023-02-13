import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './pages/auth/authguard.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { ExpenseFormComponent } from './pages/expenses/expense-form/expense-form.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentMethodTypeFormComponent } from './pages/payment-method-types/payment-method-type-form/payment-method-type-form.component';
import { PaymentMethodTypesComponent } from './pages/payment-method-types/payment-method-types.component';
import { PaymentMethodFormComponent } from './pages/payment-methods/payment-method-form/payment-method-form.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';

const canActivate = [AuthguardGuard];

export const routes: Routes = [
  { path: 'categories/new', component: CategoryFormComponent, canActivate },
  { path: 'categories/edit/:id', component: CategoryFormComponent, canActivate },
  { path: 'categories', component: CategoriesComponent, canActivate },
  { path: 'expenses/new', component: ExpenseFormComponent, canActivate },
  { path: 'expenses/edit/:id', component: ExpenseFormComponent, canActivate },
  { path: 'expenses', component: ExpensesComponent, canActivate },
  { path: 'payment-methods/new', component: PaymentMethodFormComponent, canActivate },
  { path: 'payment-methods/edit/:id', component: PaymentMethodFormComponent, canActivate },
  { path: 'payment-methods', component: PaymentMethodsComponent, canActivate },
  { path: 'payment-method-types/new', component: PaymentMethodTypeFormComponent, canActivate },
  { path: 'payment-method-types/edit/:id', component: PaymentMethodTypeFormComponent, canActivate },
  { path: 'payment-method-types', component: PaymentMethodTypesComponent, canActivate },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
