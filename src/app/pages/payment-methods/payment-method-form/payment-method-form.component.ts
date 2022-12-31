import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentMethod } from '../interfaces/payment-methods.interface';

@Component({
  selector: 'app-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss']
})
export class PaymentMethodFormComponent implements OnInit {
  public paymentMethodForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    icon: new FormControl(null),
    type: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  protected paymentTypeUrl = 'http://localhost:3000/payment-methods';


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
    if (this.paymentMethodForm.dirty) {
      if (!this.isEditMode) {
        this.http.post(this.paymentTypeUrl, this.paymentMethodForm.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.http.put(this.paymentTypeUrl + "/" + this.id, this.paymentMethodForm.value).subscribe(() => {
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
    this.http.get<PaymentMethod>(this.paymentTypeUrl + "/" + this.id).subscribe((data) => {
      delete data["id"];
      this.paymentMethodForm.setValue(data);
    })
  }

}
