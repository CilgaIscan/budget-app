import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { PaymentMethodService } from '../payment-method.service';
import { PaymentMethodType } from '../../payment-method-types/interfaces/payment-method-types.interface';
import { PaymentMethodTypeService } from '../../payment-method-types/payment-method-type.service';

@Component({
  selector: 'app-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss']
})
export class PaymentMethodFormComponent implements OnInit {
  public paymentMethodTypeOptions: any[] = [];

  public paymentMethodForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    icon: new UntypedFormControl(null),
    type: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)])
  });

  constructor(private readonly location: Location, private paymentMethodService: PaymentMethodService, private paymentMethodTypeService: PaymentMethodTypeService) { }

  ngOnInit(): void {
    this.getPaymentMethodTypes();
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
        this.paymentMethodService.create(this.paymentMethodForm.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.paymentMethodService.update(this.id, this.paymentMethodForm.value).subscribe(() => {
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
    this.paymentMethodService.getById(this.id).subscribe((data) => {
      delete data["id"];
      delete data["created_at"];
      delete data["updated_at"];
      this.paymentMethodForm.setValue(data);
    })
  }

  private getPaymentMethodTypes() {
    this.paymentMethodTypeService.getAll().subscribe((data: PaymentMethodType[]) => {
      this.paymentMethodTypeOptions = data.map((pmt: PaymentMethodType) => {
        return {
          viewValue: pmt.name,
          value: pmt.id
        }
      });
    })
  }
}
