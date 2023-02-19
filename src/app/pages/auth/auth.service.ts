import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Login } from './interfaces/login.interface';
import { Register } from './interfaces/register.interface';
import { Token } from './interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://api.hgx2.tercanli.com/auth';

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
      .post<Token>(this.baseUrl + '/jwt/refresh', { refresh })
      .pipe(
        map(token => {
          this.saveToken(token);
          return token;
        })
      );
  }

  public me(): Observable<any> {
    const maybeUser = this.getUser();
    if (maybeUser) {
      return of(maybeUser);
    }

    const token = this.getAccessToken();
    return this.http
      .get<any>(this.baseUrl + '/users/me/')
      .pipe(
        map(user => {
          this.saveUser(user);
          return user;
        })
      );
  }

  public saveToken(token: Token) {
    const { access, refresh } = token;
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  }

  public getAccessToken() {
    return localStorage.getItem('access');
  }

  public getRefreshToken() {
    return localStorage.getItem('refresh');
  }

  private saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private clearUser() {
    localStorage.removeItem('user');
  }

  private getUser(): any {
    const rawUser = localStorage.getItem('user');
    return rawUser ? JSON.parse(rawUser) : null;
  }

  public isAuthorized() {
    return !!this.getAccessToken();
  }

  public logout() {
    this.clearUser();
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.reload();
  }
}
