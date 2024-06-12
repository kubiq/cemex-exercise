import { Component, Input } from '@angular/core';
import { OrderStatus } from '../../types';

@Component({
  selector: 'ce-order-status',
  standalone: true,
  imports: [],
  template: '<div [className]="status">{{ translateStatus(status) }}</div>',
  styleUrl: './order-status.component.css',
})
export class OrderStatusComponent {

  @Input() status!: OrderStatus;

  //todo make scalable
  translateStatus(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.inProgress:
        return 'In Progress';
      case OrderStatus.pending:
        return 'Pending';
      case OrderStatus.completed:
        return 'Completed';
      default:
        return status;
    }
  }
}
