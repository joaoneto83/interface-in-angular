import { Component, OnInit } from '@angular/core';

import { Product } from 'src/shared/models/products-model';

import { elginProducts } from 'src/shared/ObejctMock/products';
import { structureLine } from 'src/shared/ObejctMock/structureLine';

@Component({
  selector: 'elgin-line-structure',
  templateUrl: './line-structure.component.html',
  styleUrls: ['./line-structure.component.scss']
})
export class LineStructureComponent implements OnInit {

  elginProducts: Product;
  structureLine: any;
  selectedItem: number;
  routeId: number;
  productLine: any;
  selectedProduct: number;
  productType: any;
  productSelected: boolean;
  isSelected: boolean;

  constructor() { }

  ngOnInit(): void { Object.assign(this, { elginProducts, structureLine}); }

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
