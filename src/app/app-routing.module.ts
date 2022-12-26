import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';

const routes: Routes = [
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/edit/:id', component: CategoryFormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expense/new', component: CategoryFormComponent },
  { path: 'expenses', component: CategoriesComponent },
  { path: 'payment-method/new', component: CategoryFormComponent },
  { path: 'payment-methods', component: CategoriesComponent },
  { path: '', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
