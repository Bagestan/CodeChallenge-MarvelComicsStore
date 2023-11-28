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
import { Comic } from '../../services/comic-types';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
  image!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public comic: { comic: Comic }) {
    console.log(comic.comic);
    this.image = `${this.comic.comic.thumbnail.path}/portrait_incredible.jpg`;
  }
}
