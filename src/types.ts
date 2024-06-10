
export enum OrderStatus {
  inProgress = 'inProgress',
  pending = 'pending',
  completed = 'completed',
}

export enum OrderUnit {
  weight = 'TN',
  volume = 'm3',
}

export interface OrderQuantity {
  amount: number;
  unit: OrderUnit;
}

export interface OrderItem {
  id: number;
  status: OrderStatus;
  orderNumber: number;
  productLine: string;
  product: string;
  quantity: OrderQuantity;
  requestedOn: Date;
}

export interface OrdersFilter {
  statuses: OrderStatus[];
  productLine: string;
  from: Date | null;
  to: Date | null;
  orderNumber: number | null;
}
