import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProductSearchComponent } from '../shared/product-search/product-search.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('category') categoryElem: ElementRef;

  @ViewChildren('productSearch') productSearch: ProductSearchComponent;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.categoryElem.nativeElement.focus();
    console.log(this.productSearch);
  }

  onSave() {
    this.productSearch.searchForm.reset();
  }
}
