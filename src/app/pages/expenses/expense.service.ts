import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from './interfaces/expenses.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = 'http://192.168.0.21:8000/api/expenses';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Expense> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Expense>(url);
  }

  public getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.baseUrl);
  }

  public create(data: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.baseUrl, data);
  }

  public update(id: string, data: Expense): Observable<Expense> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Expense>(url, data);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
