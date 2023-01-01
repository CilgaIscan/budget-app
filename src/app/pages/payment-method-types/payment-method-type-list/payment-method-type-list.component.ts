import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentMethodType } from '../interfaces/payment-method-types.interface';
import { PaymentMethodTypeService } from '../payment-method-type.service';

@Component({
  selector: 'app-payment-method-type-list',
  templateUrl: './payment-method-type-list.component.html',
  styleUrls: ['./payment-method-type-list.component.scss']
})
export class PaymentMethodTypeListComponent implements OnInit {

  public displayedColumns = ["name", "actions"];
  public paymentMethodTypes: PaymentMethodType[] = [];

  constructor(private router: Router, private paymentMethodTypeService: PaymentMethodTypeService) { }

  ngOnInit(): void {
    this.showPaymentMethodTypes();
  }

  public deletePaymentMethodType(id: string) {
    this.paymentMethodTypeService.delete(id).subscribe(() => {
      this.showPaymentMethodTypes();
    });
  }

  public editPaymentMethodType(id: number) {
    return this.router.navigate([`/payment-method-types/edit/${id}`]);
  }

  private showPaymentMethodTypes() {
    this.paymentMethodTypeService.getAll()
      .subscribe((data: PaymentMethodType[]) => {
        this.paymentMethodTypes = data;
      });
  }
}
