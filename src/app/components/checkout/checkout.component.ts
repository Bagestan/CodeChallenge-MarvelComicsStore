import { Component, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CheckoutService } from '../../services/checkout.service';
import { CheckoutItens } from '../../types/comic-types';
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
  checkoutItens: CheckoutItens[] = [];
  price = 0;
  code = 'ELCODE';

  constructor(private checkout: CheckoutService, private router: Router) {
    this.checkoutItens = this.checkout.getCheckoutItens();

    if (this.checkoutItens.length > 0) {
    } else {
      this.router.navigate(['']);
    }

    this.price = this.checkout.getPrice();
  }

  calcDiscount() {
    this.checkout.calcDiscount(this.code);
  }
}
