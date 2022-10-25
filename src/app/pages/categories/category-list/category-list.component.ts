import { Component, OnInit } from '@angular/core';

export interface Category {
  name: string,
  icon: string
}

const DATA: Category[] = [
  {name: "Groceries", icon: "vegetable"},
  {name: "Pharmacy", icon: "pill"},
]

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
 
  displayedColumns = ["name", "icon"];
  initialData = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
