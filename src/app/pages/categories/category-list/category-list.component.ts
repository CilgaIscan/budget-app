import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../interfaces/category.interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public displayedColumns = ["name", "icon", "color", "actions"];
  public categories: Category[] = [];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.showCategory();
  }

  public deleteCategory(id: string) {
    this.categoryService.delete(id).subscribe(() => {
      this.showCategory();
    });
  }

  public editCategory(id: number) {
    return this.router.navigate([`/categories/edit/${id}`]);
  }

  private showCategory() {
    this.categoryService.getAll()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }
}
