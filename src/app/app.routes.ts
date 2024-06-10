import { Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';

export const routes: Routes = [

  {path: '', redirectTo: '/orders', pathMatch: 'full'},
  {path: 'orders', component: OrderHistoryComponent},

];
