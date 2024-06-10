
export enum OrderStatus {
  inProgress = 'inProgress',
  pending = 'pending',
  completed = 'completed',
  Unknown = '',
}

export enum OrderUnit {
  weight = 'TN',
  volume = 'm3',
}

export interface OrderItem {
  id: number;
  status: OrderStatus;
  orderNumber: number;
  productLine: string;
  product: string;
  quantity: number;
  unit: OrderUnit;
  requestedOn: Date;
}
