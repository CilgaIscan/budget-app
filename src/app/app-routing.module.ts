import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';

const routes: Routes = [
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
