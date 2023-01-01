import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from './interfaces/category.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://192.168.0.21:8000/api/categories';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  public create(data: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, data);
  }

  public update(id: string, data: Category): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Category>(url, data);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
