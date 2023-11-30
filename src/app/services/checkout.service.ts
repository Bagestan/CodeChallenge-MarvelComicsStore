import { Injectable, signal } from '@angular/core';
import { Comic } from '../types/comic-types';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  #comicsCheckout = signal<Comic[]>([]);

  addToCart(comic: Comic) {
    this.#comicsCheckout.update((value) => {
      value.push(comic);
      return value;
    });
  }
}
