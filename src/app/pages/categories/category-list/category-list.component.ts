import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public displayedColumns = ["name", "icon", "actions"];
  public categories: Category[] = [];
  protected categoryUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.showCategory();
  }

  public deleteCategory(id: number) {
    this.http.delete(this.categoryUrl + "/" + id).subscribe(() => {
      this.showCategory();
    });
  }

  public editCategory(id: number) {
    return this.router.navigate([`/categories/edit/${id}`]);
  }

  private getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  private showCategory() {
    this.getCategory()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }
}
