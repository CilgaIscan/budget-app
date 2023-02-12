import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { PaymentMethodsModule } from './pages/payment-methods/payment-methods.module';
import { PaymentMethodTypesModule } from './pages/payment-method-types/payment-method-types.module';
import { ExpensesModule } from './pages/expenses/expenses.module';
import { catchError, forkJoin, of } from 'rxjs';
import { AuthModule } from './pages/auth/auth.module';
import { AuthInterceptorService } from './pages/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    TranslateModule.forRoot(),
    SharedModule,
    AuthModule,
    CategoriesModule,
    ExpensesModule,
    PaymentMethodsModule,
    PaymentMethodTypesModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [HttpClient, TranslateService],
    multi: true
  },
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService, 
    multi: true 
  },
  {
    provide: MAT_DATE_LOCALE,
    useValue: 'en-GB'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initApp(http: HttpClient, translate: TranslateService) {
  return () => new Promise<boolean>((resolve: (res: boolean) => void) => {

    const defaultLocale = 'en';
    const translationsUrl = '/assets/i18n/translations';
    const sufix = '.json';
    const storageLocale = localStorage.getItem('locale');
    const locale = storageLocale || defaultLocale;

    forkJoin([
      http.get(`/assets/i18n/dev.json`).pipe(
        catchError(() => of(null))
      ),
      http.get(`${translationsUrl}/${locale}${sufix}`).pipe(
        catchError(() => of(null))
      )
    ]).subscribe((response: any[]) => {
      const devKeys = response[0];
      const translatedKeys = response[1];

      translate.setTranslation(defaultLocale, devKeys || {});
      translate.setTranslation(locale, translatedKeys || {}, true);

      translate.setDefaultLang(defaultLocale);
      translate.use(locale);

      resolve(true);
    });
  });
}
