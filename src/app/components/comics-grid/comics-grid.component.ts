import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Comic } from '../../services/comic-types';
import { CardComicComponent } from '../card-comic/card-comic.component';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-comics-grid',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CardComicComponent,
    MatSlideToggleModule,
  ],
  providers: [MarvelApiService],
  templateUrl: './comics-grid.component.html',
  styleUrl: './comics-grid.component.scss',
})
export class ComicsGridComponent {
  comicsList!: Comic[];

  constructor(private marvelService: MarvelApiService) {
    this.getComics();
  }

  getComics() {
    this.marvelService.getComics().subscribe((comics) => {
      if (comics.data) {
        this.comicsList = comics.data.results;
      }
    });
  }

  hideUnavailable(event: any) {
    if (event.checked) {
      this.comicsList = this.comicsList.filter(
        (data) => data.prices[0].price > 0
      );
    } else {
      this.getComics();
    }
  }
}
