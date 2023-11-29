import { Injectable, computed, effect, signal } from '@angular/core';
import { Comic } from '../types/comic-types';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  comicsCheckout = signal<Comic[]>([]);

  constructor() {}

  addToCart(comic: Comic) {
    this.comicsCheckout.update((value) => {
      console.log('🚀 ~ #comicsCheckout:', this.comicsCheckout());

      value.push(comic);
      return value;
    });
  }

  logSignal() {
    console.log('🚀 ~ this.comicsCheckout();:', this.comicsCheckout());
  }
}
