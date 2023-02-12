import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
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
          this.saveToken(token);
          return token;
        })
      );
  }

  public refresh(): Observable<Token> {
    const refresh = this.getRefreshToken();
    return this.http
      .post<Token>(this.baseUrl + '/jwt/refresh', {refresh})
      .pipe(
        map(token => {
          this.saveToken(token);
          return token;
        })
      );
  }

  public saveToken(token: Token) {
    const {access, refresh } = token;
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  }

  public getAccessToken() {
    return localStorage.getItem('access');
  }

  public getRefreshToken() {
    return localStorage.getItem('refresh');
  }

  public isAuthorized() {
    return !!this.getAccessToken();
  }

  public logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
