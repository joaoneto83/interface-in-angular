import { Component, OnInit } from '@angular/core';

import { Product } from 'src/shared/models/products-model';

import { elginProducts } from 'src/shared/ObejctMock/products';

@Component({
  selector: 'elgin-products-price',
  templateUrl: './products-price.component.html',
  styleUrls: ['./products-price.component.scss']
})
export class ProductsPriceComponent implements OnInit {
  elginProducts: Product;
  selectedItem: number;
  routeId: number;
  productLine: any;
  selectedProduct: number;
  productType: any;
  productSelected: boolean;
  isSelected: boolean;

  constructor() {
    Object.assign(this, { elginProducts });
  }

  ngOnInit(): void { }

  navigate(index: number, object: Product) {
    this.selectedItem = index;
    this.routeId = this.elginProducts[this.selectedItem].id;
    this.productLine = object;
  }

  selectProduct(index: number, object: Product) {
    this.selectedProduct = index;
    this.productType = object;
    this.productSelected = true;
  }

}
