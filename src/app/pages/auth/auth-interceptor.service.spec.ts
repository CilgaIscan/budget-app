import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FakeAuthService } from 'src/app/mock-data/auth';

import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthService } from './auth.service';

xdescribe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;
  let client: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { 
          provide: AuthService, 
          useClass: FakeAuthService,
        },
        {
          provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptorService, 
          multi: true
        },
      ],
    });

    service = TestBed.inject(AuthInterceptorService);
    client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
