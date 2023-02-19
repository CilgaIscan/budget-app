import { TestBed } from '@angular/core/testing';
import { FakeAuthService } from 'src/app/mock-data/auth';
import { AuthService } from './auth.service';

import { AuthguardGuard } from './authguard.guard';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService
        }
      ]
    });
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
