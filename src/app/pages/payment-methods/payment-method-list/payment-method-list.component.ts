import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from '../interfaces/payment-methods.interface';
import { PaymentMethodService } from '../payment-method.service';


@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss']
})
export class PaymentMethodListComponent implements OnInit {

  public displayedColumns = ["name", "icon", "type", "actions"];
  public paymentMethods: PaymentMethod[] = [];

  constructor(private router: Router, private paymentMethodService: PaymentMethodService) { }

  ngOnInit(): void {
    this.showPaymentMethod();
  }

  public deletePaymentMethod(id: string) {
    this.paymentMethodService.delete(id).subscribe(() => {
      this.showPaymentMethod();
    });
  }

  public editPaymentMethod(id: number) {
    return this.router.navigate([`/payment-methods/edit/${id}`]);
  }

  private showPaymentMethod() {
    this.paymentMethodService.getAll()
      .subscribe((data: PaymentMethod[]) => {
        this.paymentMethods = data;
      });
  }

}
