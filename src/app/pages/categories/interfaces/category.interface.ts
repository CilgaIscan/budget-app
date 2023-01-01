import { Base } from "src/app/shared/interfaces/base.interface";

export interface Category extends Base {
  name: string,
  icon: string,
  color: string
}