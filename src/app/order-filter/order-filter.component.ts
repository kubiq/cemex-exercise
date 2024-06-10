import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzCheckboxComponent, NzCheckboxGroupComponent } from 'ng-zorro-antd/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NgForOf } from '@angular/common';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { OrdersFilter } from '../../types';

@Component({
  selector: 'ce-order-filter',
  standalone: true,
  imports: [
    NzCheckboxGroupComponent,
    ReactiveFormsModule,
    NzCheckboxComponent,
    NzSelectComponent,
    NzOptionComponent,
    NgForOf,
    NzDividerComponent,
    NzDatePickerComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzIconDirective,
  ],
  templateUrl: './order-filter.component.html',
  styleUrl: './order-filter.component.css',
})
export class OrderFilterComponent {

  private statusOptions = [
    {label: 'Pending', value: 'pending', checked: false},
    {label: 'In progress', value: 'inProgress', checked: false},
    {label: 'Completed', value: 'completed', checked: false},
  ];

  protected filterForm: FormGroup = new FormGroup({
    status: new FormControl(this.statusOptions),
    productLine: new FormControl('all'),
    from: new FormControl(new Date("2022-01-01")),
    to: new FormControl(new Date("2022-12-31")),
    orderNumber: new FormControl(null),
  });

  @Input() productLineOptions?: string[] | null;

  @Output() filterChange: EventEmitter<OrdersFilter> = new EventEmitter();

  constructor() {
    this.filterForm.valueChanges.subscribe(f => this.filterChange.emit({
      ...f, orderNumber: +f.orderNumber
    }));
  }

}
