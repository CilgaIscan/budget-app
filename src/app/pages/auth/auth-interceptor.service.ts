import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      // add authorization header with jwt token if available
      let token = this.authService.getAccessToken();
      if (token) {
          request = request.clone({
              setHeaders: { 
                  Authorization: `Bearer ${token}`
              }
          });
      }

      return next.handle(request).pipe(
        catchError(err => {
            if (err.error.code === 'token_not_valid') {
                return this.authService.refresh();
            }
        
            const error = err.error.message || err.statusText;
            return throwError(error);
        })
      );
  }
}