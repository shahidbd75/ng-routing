import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private _item;
  name;
  constructor() {}

  ngOnInit(): void {}

  get item() {
    return this._item;
  }

  set item(value: number) {
    this._item = value * value;
  }

  onNameChange(newName): void {
    this.name = newName;
  }
}
