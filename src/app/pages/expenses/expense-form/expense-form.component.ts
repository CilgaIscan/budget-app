import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from '../../categories/category.service';
import { Category } from '../../categories/interfaces/category.interface';
import { PaymentMethod } from '../../payment-methods/interfaces/payment-methods.interface';
import { PaymentMethodService } from '../../payment-methods/payment-method.service';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  public paymentMethodOptions: any[] = [];
  public categoryOptions: any[] = [];

  public expenseForm = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl(null, [Validators.maxLength(255)]),
    amount: new FormControl(null, [Validators.required, Validators.min(0.0001)]),
    store: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    category: new FormControl(null, [Validators.required]),
    paid_at: new FormControl(new Date(), [Validators.required]),
    payment_method: new FormControl(null, [Validators.required]),
  });

  constructor(private readonly location: Location, private paymentMethodService: PaymentMethodService, private expenseService: ExpenseService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
    this.getCategories();
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
    if (this.expenseForm.dirty) {
      this.normalizePaidAt();
      if (!this.isEditMode) {
        this.expenseService.create(this.expenseForm.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.expenseService.update(this.id, this.expenseForm.value).subscribe(() => {
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
    this.expenseService.getById(this.id).subscribe((data) => {
      delete data["id"];
      delete data["created_at"];
      delete data["updated_at"];
      this.expenseForm.setValue(data);
    })
  }

  private getPaymentMethods() {
    this.paymentMethodService.getAll().subscribe((data: PaymentMethod[]) => {
      this.paymentMethodOptions = data.map((pmt: PaymentMethod) => {
        return {
          viewValue: pmt.name,
          value: pmt.id
        }
      });
    })
  }

  private getCategories() {
    this.categoryService.getAll().subscribe((data: Category[]) => {
      this.categoryOptions = data.map((pmt: Category) => {
        return {
          viewValue: pmt.name,
          value: pmt.id
        }
      });
    })
  }

  private normalizePaidAt(): void {
    const selectedDateControl = this.expenseForm.get('paid_at');
    const d = new Date(selectedDateControl?.value);
    selectedDateControl?.setValue(d.toISOString().split('T')[0]);
  }
}

