import { Component, Input } from '@angular/core';
import { OrderQuantity } from '../../types';

@Component({
  selector: 'ce-order-quantity',
  standalone: true,
  imports: [],
  template: '{{quantity.amount}} {{quantity.unit}}',
  styleUrl: './order-quantity.component.css'
})
export class OrderQuantityComponent {

  @Input() quantity!: OrderQuantity;

}
