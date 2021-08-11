import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styles: [],
})
export class ProductSearchComponent implements OnInit {
  searchForm: FormGroup;
  status = [
    { id: 1, name: 'Delivered' },
    { id: 2, name: 'Processing' },
    { id: 3, name: 'Not Approved' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      keyword: [''],
      status: [null, Validators.required],
    });
  }
}
