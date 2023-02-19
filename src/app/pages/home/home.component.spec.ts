import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { FakeAuthService } from 'src/app/mock-data/auth';
import { TRANSLATIONS } from 'src/app/mock-data/translations';
import { AuthService } from '../auth/auth.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService,
        },
      ],
      imports: [
        TranslateTestingModule.withTranslations(TRANSLATIONS),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
