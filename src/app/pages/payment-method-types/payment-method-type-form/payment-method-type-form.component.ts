import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentMethodType } from '../interfaces/payment-method-types.interface';

@Component({
  selector: 'app-payment-method-type-form',
  templateUrl: './payment-method-type-form.component.html',
  styleUrls: ['./payment-method-type-form.component.scss']
})
export class PaymentMethodTypeFormComponent implements OnInit {
  public paymentMethodTypeForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  protected paymentMethodTypeUrl = 'http://localhost:3000/payment-method-types';

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
    if (this.paymentMethodTypeForm.dirty) {
      if (!this.isEditMode) {
        this.http.post(this.paymentMethodTypeUrl, this.paymentMethodTypeForm.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.http.put(this.paymentMethodTypeUrl + "/" + this.id, this.paymentMethodTypeForm.value).subscribe(() => {
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
    this.http.get<PaymentMethodType>(this.paymentMethodTypeUrl + "/" + this.id).subscribe((data) => {
      delete data["id"];
      this.paymentMethodTypeForm.setValue(data);
    })
  }

}
