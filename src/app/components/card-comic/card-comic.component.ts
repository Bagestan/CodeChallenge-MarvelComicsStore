import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comic } from '../../services/comic-types';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardDetailsComponent } from '../card-details/card-details.component';

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
  templateUrl: './card-comic.component.html',
  styleUrl: './card-comic.component.scss',
})
export class CardComicComponent {
  @Input() comic!: Comic;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      data: { comic: this.comic },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
