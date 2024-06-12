import { Injectable } from '@angular/core';
import { OrderItem, OrdersFilter, OrderStatus, OrderUnit } from '../types';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private allProductLinesOption = 'all';

  private filterSubject = new BehaviorSubject<OrdersFilter>({
    status: [],
    productLine: 'all',
  });

  private ordersSubject = new BehaviorSubject([{
    id: 1,
    status: OrderStatus.inProgress,
    orderNumber: 3301,
    productLine: 'Ready-Mix',
    product: '1-200-2-C28-12-1-3-000',
    quantity: {
      amount: 12,
      unit: OrderUnit.volume,
    },
    requestedOn: new Date('2022-10-20'),
  }, {
    id: 2,
    status: OrderStatus.pending,
    orderNumber: 3305,
    productLine: 'Cement',
    product: 'Gris CPC 30 R Montmerrey Extra 50Kg.',
    quantity: {
      amount: 10,
      unit: OrderUnit.weight,
    },
    requestedOn: new Date('2022-10-10'),
  }, {
    id: 3,
    status: OrderStatus.pending,
    orderNumber: 3290,
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: {
      amount: 2,
      unit: OrderUnit.weight,
    },
    requestedOn: new Date('2022-09-29'),
  }, {
    id: 4,
    status: OrderStatus.completed,
    orderNumber: 3184,
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: {
      amount: 5,
      unit: OrderUnit.weight,
    },
    requestedOn: new Date('2022-05-14'),
  }, {
    id: 5,
    status: OrderStatus.completed,
    orderNumber: 3295,
    productLine: 'Cement',
    product: 'Gris CPC30R Tolteca 50Kg',
    quantity: {
      amount: 12,
      unit: OrderUnit.weight,
    },
    requestedOn: new Date('2022-04-05'),
  }, {
    id: 6,
    status: OrderStatus.completed,
    orderNumber: 2994,
    productLine: 'Ready-Mix',
    product: '1-200-2-C28-12-1-3-000',
    quantity: {
      amount: 15.5,
      unit: OrderUnit.volume,
    },
    requestedOn: new Date('2022-03-10'),
  },
  ]);

  // Filter data based on filters
  orders$: Observable<OrderItem[]> = combineLatest([
    this.ordersSubject,
    this.filterSubject,
  ])
    .pipe(map(([orders, filter]) => {
        return orders.filter(order => {
          return (!filter.status || filter.status.length === 0 || filter.status.includes(order.status))
            && (!filter.productLine || filter.productLine === this.allProductLinesOption || filter.productLine === order.productLine)
            && (!filter.from || order.requestedOn >= filter.from)
            && (!filter.to || order.requestedOn <= filter.to)
            && (!filter.orderNumber || order.orderNumber === filter.orderNumber);
        });
      }),
    );

  productLineOptions$: Observable<string[]> = this.ordersSubject.pipe(
    map(orders => orders.map(order => order.productLine)),
    map(productLines => [...new Set(productLines)]),
  );

  setFilter(filter: OrdersFilter) {
    console.log('filter', filter);
    this.filterSubject.next(filter);
  }

}
