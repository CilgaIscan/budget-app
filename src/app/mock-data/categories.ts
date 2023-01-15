import { of } from "rxjs"

export const Categories = {
  1: {
    name: "Rent",
    id: 1,
    icon: "cash",
    color: "blue"
  },
  2: {
    name: "Grocery",
    id: 2,
    icon: "cash",
    color: "green"
  },
}

export class FakeCategoryService {
  getAll() {
    return of(Object.values(Categories));
  }

  getById() {
    return of(Categories[1]);
  }
}