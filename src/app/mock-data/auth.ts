import { Observable, of } from "rxjs"
import { Login } from "../pages/auth/interfaces/login.interface";
import { Register } from "../pages/auth/interfaces/register.interface";
import { Token } from "../pages/auth/interfaces/token.interface";

export const USERS = {
  1: {
    name: "Rent",
    id: 1,
    icon: "cash",
    color: "blue"
  },
  2: {
    name: "Grocery",
    id: 2,
    icon: "cash",
    color: "green"
  },
}

export class FakeAuthService {
  public register(data: Register): Observable<Register> {
    return of({username: '', password: '', email: ''});
  }

  public login(data: Login): Observable<Token> {
    return of({refresh: '', access: ''});
  }

  public refresh(): Observable<Token> {
    const refresh = this.getRefreshToken();
    return of({refresh: '', access: ''});
  }

  public me(): Observable<any> {
    return of(USERS[1]);
  }

  public saveToken(token: Token) {
    // 
  }

  public getAccessToken() {
    return '';
  }

  public getRefreshToken() {
    return '';
  }

  public isAuthorized() {
    return true;
  }
}