import { of } from "rxjs";

export const PaymentMethods = {
  1: {
    name: "Salary Account",
    id: 1,
    icon: "cash",
    type: 1
  },
  2: {
    name: "Golden Boy",
    id: 2,
    icon: "card",
    type: 2
  }
}

export class FakePmService {
  getAll() {
    return of(Object.values(PaymentMethods));
  }
  
  getById() {
    return of(PaymentMethods[1]);
  }
}