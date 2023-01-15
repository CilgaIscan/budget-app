import { Base } from "src/app/shared/interfaces/base.interface";

export interface Expense extends Base {
  title: string,
  description?: string;
  amount: string,
  paid_at: string,
  store: string,
  payment_method: number,
  category: number
}