import { of } from "rxjs";

export const PaymentMethodTypes = {
  1: {
    name: "Cash",
    id: 1
  },
  2: {
    name: "Debit Card",
    id: 2
  }
}

export class FakePmtService {
  getAll() {
    return of(Object.values(PaymentMethodTypes));
  }
  
  getById() {
    return of(PaymentMethodTypes[1]);
  }
}