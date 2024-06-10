import { Component, Input } from '@angular/core';
import { OrderStatus } from '../../types';

@Component({
  selector: 'ce-order-status',
  standalone: true,
  imports: [],
  template: '<div [className]="status"></div><span>{{ status }}</span>',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {

  @Input() status!: OrderStatus;

}
