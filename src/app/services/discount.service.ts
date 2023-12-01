import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  discountCode = 'ELCODE';

  constructor() {}

  validate(code: string): number {
    return code === this.discountCode ? 10 : 0;
  }
}
