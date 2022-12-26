import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(null, [Validators.required ,Validators.minLength(3)]),
    icon: new FormControl(null)
  });

  constructor(private readonly location: Location) { }

  ngOnInit(): void {
  }

  public get isEditMode(): Boolean {
    return !this.location.path().includes("/new")
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    alert('not implemented!');
  }
}
