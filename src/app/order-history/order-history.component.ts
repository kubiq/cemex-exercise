import { Component } from '@angular/core';
import { OrderItem } from '../../types';
import { AsyncPipe, DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { OrderStatusComponent } from '../order-status/order-status.component';
import { OrderQuantityComponent } from '../order-quantity/order-quantity.component';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { OrderFilterComponent } from '../order-filter/order-filter.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'ce-order-history',
  standalone: true,
  imports: [
    NgForOf,
    OrderStatusComponent,
    JsonPipe,
    DatePipe,
    OrderQuantityComponent,
    NzTableComponent,
    OrderFilterComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  constructor(
    protected ordersService: OrdersService,
  ) {
  }

  trackByOrder(index: number, order: OrderItem): number {
    return order.id;
  }

}
