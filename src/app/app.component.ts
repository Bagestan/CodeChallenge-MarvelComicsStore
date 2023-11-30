import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ComicsGridComponent } from './components/comics-grid/comics-grid.component';
import { CheckoutService } from './services/checkout.service';
import { MarvelApiService } from './services/marvel-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    HeaderComponent,
    ComicsGridComponent,
  ],
  providers: [MarvelApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private checkout: CheckoutService) {}
}
