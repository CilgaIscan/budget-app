import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { Expense } from '../interfaces/expenses.interface';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  public displayedColumns = ["paid_at", "title", "category", "amount", "payment_method", "store", "actions"];
  public expenses: Expense[] = [];

  constructor(private router: Router, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.showExpenses();
  }

  public deleteExpense(id: string) {
    this.expenseService.delete(id).subscribe(() => {
      this.showExpenses();
    });
  }

  public editExpense(id: number) {
    return this.router.navigate([`/expenses/edit/${id}`]);
  }

  private showExpenses() {
    this.expenseService.getAll()
      .subscribe((data: Expense[]) => {
        this.expenses = data;
      });
  }
}
