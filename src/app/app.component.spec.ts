import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { MaterialModule } from 'src/material.module';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeAuthService } from './mock-data/auth';
import { TRANSLATIONS } from './mock-data/translations';
import { AuthService } from './pages/auth/auth.service';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        TranslateTestingModule.withTranslations(TRANSLATIONS),
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Budget App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Budget App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header > mat-toolbar > a')?.textContent).toContain('Budget App');
  });
});
