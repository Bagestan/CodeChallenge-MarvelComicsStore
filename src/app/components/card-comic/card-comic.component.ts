import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comic } from '../../services/comic-types';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-comic',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card-comic.component.html',
  styleUrl: './card-comic.component.scss',
})
export class CardComicComponent {
  @Input() comic!: Comic;

  image!: string;
  constructor() {}

  ngOnInit() {
    this.image = `${this.comic?.thumbnail.path}/portrait_incredible.jpg`;
  }
}
