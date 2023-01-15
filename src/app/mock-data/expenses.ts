import { of } from "rxjs"

export const Expenses = {
  1: {
    title: "Rent for January",
    id: 1,
    amount: "3000",
    paid_at: "",
    store: "",
    payment_method: 1,
    category: 1
  },
  2: {
    title: "Grocery Shopping for W1",
    id: 2,
    amount: "3000",
    paid_at: "",
    store: "",
    payment_method: 1,
    category: 2
  },
}

export class FakeExpenseService {
  getAll() {
    return of(Object.values(Expenses));
  }

  getById() {
    return of(Expenses[1]);
  }
}