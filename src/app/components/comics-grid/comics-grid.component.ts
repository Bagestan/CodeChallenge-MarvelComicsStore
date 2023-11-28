import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Comic } from '../../services/comic-types';
import { CardComicComponent } from '../card-comic/card-comic.component';

@Component({
  selector: 'app-comics-grid',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardComicComponent],
  providers: [MarvelApiService],
  templateUrl: './comics-grid.component.html',
  styleUrl: './comics-grid.component.scss',
})
export class ComicsGridComponent {
  comicsList!: Comic[];

  constructor(private marvelService: MarvelApiService) {
    console.log('iniciou');
    this.marvelService.getComics().subscribe((comics) => {
      if (comics.data) {
        this.comicsList = comics.data.results;
        console.log('🚀 ~ this.comicsList:', this.comicsList);
      }
    });
  }
}
