import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';

import { SelectComponent } from './select/select.component';
import { MaterialModule } from 'src/material.module';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';



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
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    SelectComponent
  ],
  providers: [
    { 
      provide: MAT_COLOR_FORMATS, 
      useValue: NGX_MAT_COLOR_FORMATS 
    }
  ]
})
export class SharedModule { }
