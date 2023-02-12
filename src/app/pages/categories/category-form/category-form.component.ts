import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public categoryForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    icon: new FormControl(null),
    color: new FormControl(null)
  });

  constructor(private readonly location: Location, private categoryService: CategoryService) { }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.getFormData();
    }
  }

  public get isEditMode(): Boolean {
    return !this.location.path().includes("/new")
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    if (this.categoryForm.dirty) {
      if (!this.isEditMode) {
        this.categoryService.create(this.categoryForm.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.categoryService.update(this.id, this.categoryForm.value).subscribe(() => {
          this.goBack();
        })
      }
    }
  }

  private get id() {
    const parts = this.location.path().split("/");
    return parts[parts.length - 1];
  }

  private getFormData() {
    this.categoryService.getById(this.id).subscribe((data) => {
      delete data["id"];
      this.categoryForm.setValue(data);
    })
  }
}
