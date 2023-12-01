import { Component, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CheckoutService } from '../../services/checkout.service';
import { CheckoutItens, Comic } from '../../types/comic-types';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  price = 0;
  code = '';

  constructor(public checkout: CheckoutService, private router: Router) {
    if (this.checkout.getCheckoutItens().length > 0) {
    } else {
      this.router.navigate(['']);
    }

    this.price = this.checkout.getPrice();
  }

  calcDiscount() {
    this.checkout.updateDiscount(this.code);
    this.checkout.calcTotalPrice();
  }

  removeFromCart(comic: Comic) {
    this.checkout.removeFromCart(comic);
  }
}
