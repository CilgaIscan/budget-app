import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PaymentMethodTypesComponent } from './payment-method-types.component';
import { PaymentMethodTypeFormComponent } from './payment-method-type-form/payment-method-type-form.component';
import { PaymentMethodTypeListComponent } from './payment-method-type-list/payment-method-type-list.component';


@NgModule({
  declarations: [
    PaymentMethodTypesComponent,
    PaymentMethodTypeFormComponent,
    PaymentMethodTypeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class PaymentMethodTypesModule { }
