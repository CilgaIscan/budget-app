import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from './interfaces/login.interface';
import { Register } from './interfaces/register.interface';
import { Token } from './interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://192.168.0.21:8000/auth';

  constructor(private http: HttpClient) { }

  public register(data: Register): Observable<Register> {
    return this.http.post<Register>(this.baseUrl + '/users/', data);
  }

  public login(data: Login): Observable<Token> {
    return this.http
      .post<Token>(this.baseUrl + '/jwt/create/', data)
      .pipe(
        map(token => {
          console.log(token)
          // login successful if there's a jwt token in the response
          const {access, refresh } = token;
          localStorage.setItem('access', access);
          localStorage.setItem('refresh', refresh);
          return token;
        })
      );
  }
}
