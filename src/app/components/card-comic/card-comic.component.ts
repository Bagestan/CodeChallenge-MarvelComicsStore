import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { Comic } from '../../types/comic-types';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-card-comic',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    CardDetailsComponent,
  ],
  providers: [CheckoutService],
  templateUrl: './card-comic.component.html',
  styleUrl: './card-comic.component.scss',
})
export class CardComicComponent {
  @Input() comic!: Comic;

  constructor(private dialog: MatDialog, private checkout: CheckoutService) {}

  openDialog() {
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      data: { comic: this.comic },
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  addToCheckout(comic: Comic) {
    this.checkout.addToCart(comic);
  }
}
