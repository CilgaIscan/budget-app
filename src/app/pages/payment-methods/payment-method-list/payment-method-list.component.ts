import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {PaymentMethod} from '../interfaces/payment-methods.interface'

@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss']
})
export class PaymentMethodListComponent implements OnInit {

  public displayedColumns = ["name", "icon", "type", "actions"];
  public paymentMethods: PaymentMethod[] = [];
  protected paymentMethodUrl = 'http://localhost:3000/payment-methods';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.showPaymentMethod();
  }

  public deletePaymentMethod(id: number) {
    this.http.delete(this.paymentMethodUrl + "/" + id).subscribe(() => {
      this.showPaymentMethod();
    });
  }

  public editPaymentMethod(id: number) {
    return this.router.navigate([`/payment-methods/edit/${id}`]);
  }

  private getPaymentMethod(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.paymentMethodUrl);
  }

  private showPaymentMethod() {
    this.getPaymentMethod()
      .subscribe((data: PaymentMethod[]) => {
        this.paymentMethods = data;
      });
  }

}
