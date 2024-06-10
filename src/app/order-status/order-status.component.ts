import { Component, Input } from '@angular/core';
import { OrderStatus } from '../../types';

@Component({
  selector: 'ce-order-status',
  standalone: true,
  imports: [],
  template: '<div [className]="status">{{ status }}</div>',
  styleUrl: './order-status.component.css',
})
export class OrderStatusComponent {

  @Input() status!: OrderStatus;

}
