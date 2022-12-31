import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentMethodsModule } from './pages/payment-methods/payment-methods.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    CategoriesModule,
    PaymentMethodsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
