import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentMethod } from './interfaces/payment-methods.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private baseUrl = 'http://192.168.0.21:8000/api/payment-methods';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<PaymentMethod> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<PaymentMethod>(url);
  }

  public getAll(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.baseUrl);
  }

  public create(data: PaymentMethod): Observable<PaymentMethod> {
    return this.http.post<PaymentMethod>(this.baseUrl, data);
  }

  public update(id: string, data: PaymentMethod): Observable<PaymentMethod> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<PaymentMethod>(url, data);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
