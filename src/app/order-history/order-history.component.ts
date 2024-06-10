import { Component } from '@angular/core';
import { OrderItem, OrderStatus, OrderUnit } from '../../types';
import { NgForOf } from '@angular/common';
import { OrderStatusComponent } from '../order-status/order-status.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [
    NgForOf,
    OrderStatusComponent,
  ],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  orders: OrderItem[] = [{
    id: 1,
    status: OrderStatus.inProgress,
    orderNumber: 3301,
    productLine: 'Ready-Mix',
    product: '1-200-2-C28-12-1-3-000',
    quantity: 12,
    unit: OrderUnit.volume,
    requestedOn: new Date('2022-10-20'),
  }, {
    id: 2,
    status: OrderStatus.pending,
    orderNumber: 3305,
    productLine: 'Cement',
    product: 'Gris CPC 30 R Montmerrey Extra 50Kg.',
    quantity: 10,
    unit: OrderUnit.weight,
    requestedOn: new Date('2020-10-10'),
  }, {
    id: 3,
    status: OrderStatus.pending,
    orderNumber: 3290,
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: 2,
    unit: OrderUnit.weight,
    requestedOn: new Date('2022-09-29'),
  }, {
    id: 4,
    status: OrderStatus.completed,
    orderNumber: 3184,
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: 5,
    unit: OrderUnit.weight,
    requestedOn: new Date('2022-05-14'),
  }, {
    id: 5,
    status: OrderStatus.completed,
    orderNumber: 3295,
    productLine: 'Cement',
    product: 'Gris CPC30R Tolteca 50Kg',
    quantity: 12,
    unit: OrderUnit.weight,
    requestedOn: new Date('2022-04-05'),
  }, {
    id: 6,
    status: OrderStatus.completed,
    orderNumber: 2994,
    productLine: 'Ready-Mix',
    product: '1-200-2-C28-12-1-3-000',
    quantity: 15.5,
    unit: OrderUnit.volume,
    requestedOn: new Date('2022-03-10'),
  },
  ];

}
