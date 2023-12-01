import { Injectable, computed, signal } from '@angular/core';
import { CheckoutItens, Comic } from '../types/comic-types';
import { DiscountService } from './discount.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  #comicsCheckout = signal<CheckoutItens[]>([]);
  comicsCheckout = computed(this.#comicsCheckout);

  #price = signal(0);
  price = computed(this.#price);

  #code = signal('');
  code = computed(this.#code);

  constructor(private discount: DiscountService, private router: Router) {}

  getCheckoutItens = (): CheckoutItens[] => this.#comicsCheckout();

  getPrice(): number {
    this.calcTotalPrice();
    return this.#price();
  }

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

  removeFromCart(comic: Comic) {
    this.#comicsCheckout.update((value) => {
      value.map((item) => {
        if (item.comic.id === comic.id) {
          item.quantity > 0 ? item.quantity-- : item.quantity;
        }
      });
      return value.filter((item) => item.quantity > 0);
    });
    if (this.#comicsCheckout().length === 0) {
      this.router.navigate(['']);
    } else {
      this.calcTotalPrice();
    }
  }

  updateSignal(comic: CheckoutItens) {
    this.#comicsCheckout.update((value) => {
      value.push(comic);
      return value;
    });
  }

  calcTotalPrice() {
    let individualPrice = this.comicsCheckout().map(
      (item) => item.comic.prices[0].price * item.quantity
    );

    let price = individualPrice.reduce((acc, cur) => acc + cur);

    if (this.#code()) {
      let discount = this.discount.validate(this.#code());

      price = discount > 0 ? price - price * (discount / 100) : price;

      this.#price.set(price);
    } else {
      this.#price.set(price);
    }
  }

  updateDiscount(code: string) {
    this.#code.set(code);
    this.calcTotalPrice();
  }
}
