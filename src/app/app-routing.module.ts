import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { PaymentMethodFormComponent } from './pages/payment-methods/payment-method-form/payment-method-form.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';

const routes: Routes = [
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/edit/:id', component: CategoryFormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expense/new', component: CategoryFormComponent },
  { path: 'expenses', component: CategoriesComponent },
  { path: 'payment-methods/new', component: PaymentMethodFormComponent },
  { path: 'payment-methods/edit/:id', component: PaymentMethodFormComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  { path: '', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
