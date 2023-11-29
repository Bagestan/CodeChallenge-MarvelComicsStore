import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Comic } from '../../types/comic-types';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatCardModule,
  ],
  providers: [CheckoutService],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
  comic: Comic;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { comic: Comic },
    private checkout: CheckoutService
  ) {
    this.comic = data.comic;
  }

  addComicCheckout() {
    this.checkout.addToCart(this.comic);
  }
}
