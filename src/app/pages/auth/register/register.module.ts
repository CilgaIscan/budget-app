import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterComponent } from './register.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    TranslateModule
  ]
})
export class RegisterModule { }
