import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public categoryForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    icon: new UntypedFormControl(null),
    color: new UntypedFormControl(null)
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
      this.normalizeColor();
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
      
      const c = this.hexToRGB(data.color);
      const color = new Color(c.r, c.g, c.b, c.a);

      this.categoryForm.setValue({
        ...data,
        color,
      });
    })
  }

  private normalizeColor(): void {
    const colorControl = this.categoryForm.get('color');
    colorControl?.setValue(colorControl?.value.hex);
  }

  private hexToRGB(hex: string) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16),
        a = 1;

    return {r, g, b, a};
  }
}
