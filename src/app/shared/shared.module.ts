import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';

import { MaterialModule } from 'src/material.module';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    SelectComponent
  ]
})
export class SharedModule { }
