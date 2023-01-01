import { Base } from "src/app/shared/interfaces/base.interface";

export interface PaymentMethod extends Base {
  name: string,
  icon: string,
  type: string
}