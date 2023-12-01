import { Injectable, computed, signal } from '@angular/core';
import { CheckoutItens, Comic } from '../types/comic-types';
import { DiscountService } from './discount.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  #comicsCheckout = signal<CheckoutItens[]>([]);
  comicsCheckout = computed(this.#comicsCheckout);

  #price = signal(0);
  price = computed(this.#price);

  constructor(private discount: DiscountService) {}

  addToCart(comic: Comic) {
    const isNewItem = this.#comicsCheckout().some(
      (item) => item.comic.id === comic.id
    );

    if (isNewItem) {
      const existingItem = this.#comicsCheckout().find(
        (item) => item.comic.id === comic.id
      );

      if (existingItem) existingItem.quantity += 1;
    } else {
      this.updateSignal({
        quantity: 1,
        comic: comic,
      });
    }
  }

  updateSignal(comic: CheckoutItens) {
    this.#comicsCheckout.update((value) => {
      value.push(comic);
      return value;
    });
  }

  getCheckoutItens = (): CheckoutItens[] => this.#comicsCheckout();

  getPrice = (): number => {
    this.calcTotalPrice();
    return this.#price();
  };

  calcTotalPrice() {
    this.comicsCheckout().map((item) => {
      this.#price.update((price) => {
        return (price += item.comic.prices[0].price * item.quantity);
      });
    });
  }

  calcDiscount(code: string) {
    let discount = this.discount.validate(code);

    this.#price.update((value) =>
      discount ? value - value * (discount / 100) : value
    );
  }
}
