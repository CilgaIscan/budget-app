import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public categoryForm = new FormGroup({
    name: new FormControl(null, [Validators.required ,Validators.minLength(3)]),
    icon: new FormControl(null)
  });

  protected categoryUrl = 'http://localhost:3000/categories';

  constructor(private readonly location: Location, private http: HttpClient) { }

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
    if(!this.isEditMode) {
      this.http.post(this.categoryUrl,this.categoryForm.value).subscribe(() => {
       this.goBack();
      });
    } else {
      this.http.put(this.categoryUrl + "/" + this.id ,this.categoryForm.value).subscribe(() => {
        this.goBack();
      })
    }
  }

  private get id() {
    const parts = this.location.path().split("/");
    return parts[parts.length - 1];
  }

  private getFormData() {
    this.http.get<Category>(this.categoryUrl + "/" + this.id).subscribe((data) => {
      delete data["id"];
      this.categoryForm.setValue(data);
    })
  }
}
