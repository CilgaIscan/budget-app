import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';

import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputComponent
  ]
})
export class SharedModule { }
