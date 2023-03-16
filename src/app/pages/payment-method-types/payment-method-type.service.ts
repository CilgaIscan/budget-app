import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentMethodType } from './interfaces/payment-method-types.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodTypeService {
  private baseUrl = 'https://api.hgx2.tercanli.com/api/payment-method-types';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<PaymentMethodType> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<PaymentMethodType>(url);
  }

  public getAll(): Observable<PaymentMethodType[]> {
    return this.http.get<PaymentMethodType[]>(this.baseUrl);
  }

  public create(data: PaymentMethodType): Observable<PaymentMethodType> {
    return this.http.post<PaymentMethodType>(this.baseUrl, data);
  }

  public update(id: string, data: PaymentMethodType): Observable<PaymentMethodType> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<PaymentMethodType>(url, data);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
