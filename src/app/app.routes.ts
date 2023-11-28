import { Routes } from '@angular/router';
import { ComicsGridComponent } from './components/comics-grid/comics-grid.component';

export const routes: Routes = [
  { path: '', loadComponent: () => ComicsGridComponent },
];
