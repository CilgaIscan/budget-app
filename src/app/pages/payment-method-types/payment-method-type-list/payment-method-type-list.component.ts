import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PaymentMethodType } from '../interfaces/payment-method-types.interface';

@Component({
  selector: 'app-payment-method-type-list',
  templateUrl: './payment-method-type-list.component.html',
  styleUrls: ['./payment-method-type-list.component.scss']
})
export class PaymentMethodTypeListComponent implements OnInit {

  public displayedColumns = ["name", "actions"];
  public paymentMethodTypes: PaymentMethodType[] = [];
  protected paymentMethodTypeUrl = 'http://localhost:3000/payment-method-types';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.showPaymentMethodTypes();
  }

  public deletePaymentMethodType(id: number) {
    this.http.delete(this.paymentMethodTypeUrl + "/" + id).subscribe(() => {
      this.showPaymentMethodTypes();
    });
  }

  public editPaymentMethodType(id: number) {
    return this.router.navigate([`/payment-method-types/edit/${id}`]);
  }

  private getPaymentMethodTypes(): Observable<PaymentMethodType[]> {
    return this.http.get<PaymentMethodType[]>(this.paymentMethodTypeUrl);
  }

  private showPaymentMethodTypes() {
    this.getPaymentMethodTypes()
      .subscribe((data: PaymentMethodType[]) => {
        this.paymentMethodTypes = data;
      });
  }
}
