import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, AfterViewInit {
  qty;
  product;
  dLocation;

  @ViewChildren(NgModel) orderModels: QueryList<NgModel>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.orderModels);
  }
}
