import { Component, Input } from '@angular/core';
import { OrderStatus } from '../../types';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [],
  template: '<div [className]="status">{{ status }}</div>',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {

  @Input() status: OrderStatus = OrderStatus.Unknown;

}
