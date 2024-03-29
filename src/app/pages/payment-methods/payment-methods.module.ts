import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PaymentMethodsComponent } from './payment-methods.component';
import { PaymentMethodFormComponent } from './payment-method-form/payment-method-form.component';
import { PaymentMethodListComponent } from './payment-method-list/payment-method-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PaymentMethodsComponent,
    PaymentMethodFormComponent,
    PaymentMethodListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class PaymentMethodsModule { }
