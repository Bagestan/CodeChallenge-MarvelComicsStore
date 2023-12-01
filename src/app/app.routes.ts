import { Routes } from '@angular/router';
import { ComicsGridComponent } from './components/comics-grid/comics-grid.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', loadComponent: () => ComicsGridComponent },
  { path: 'checkout', loadComponent: () => CheckoutComponent },
];
