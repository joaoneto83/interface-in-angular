import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from 'src/shared/models/products-model';

import { elginProducts } from 'src/shared/ObejctMock/products';

import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';
import { OrderTypesModalComponent } from '../order-types-modal/order-types-modal.component';

@Component({
  selector: 'elgin-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.scss']
})
export class QueryProductComponent implements OnInit {
  elginProducts: Product;
  selectedItem: number;
  routeId: number;
  productLine: any;
  selectedProduct: number;
  productType: any;
  productSelected: boolean;
  isSelected: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    Object.assign(this, { elginProducts });
  }

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

  openProductDetailModal() {
    this.modalService.open(ProductDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }

  openOrderTypesModal() {
    this.modalService.open(OrderTypesModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
