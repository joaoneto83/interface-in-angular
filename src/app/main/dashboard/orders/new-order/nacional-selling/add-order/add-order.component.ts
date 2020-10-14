import { Component, OnInit, OnDestroy } from '@angular/core';

import { elginProducts } from '../../../../../../../shared/ObejctMock/products';

import { Product } from 'src/shared/models/products-model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductComparativeComponent } from './product-comparative/product-comparative.component';

@Component({
  selector: 'elgin-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit, OnDestroy {

  selectedItem: number;
  selectedProduct: number;
  routeId: number;
  elginProducts: Product;
  productLine: any;
  productType: any;
  productSelected: boolean;
  isMonoBlock = true;
  isMultiBlock: boolean;
  amount = 0;

  isCollapsed = false;
  cartToggle = false;

  sendOrder = false;

  constructor(private modalService: NgbModal) {
    Object.assign(this, { elginProducts });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  stopPropagation(e: Event) {
    e.stopPropagation();
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

  monoBlock() {
    this.isMonoBlock = true;
    this.isMultiBlock = false;
  }

  multiBlock() {
    this.isMultiBlock = true;
    this.isMonoBlock = false;
  }

  increaseAmount(el: HTMLInputElement) {
    const element = el;
    element.valueAsNumber += 1;
    console.log(element.id, element.value);
  }

  decreaseAmount(el: HTMLInputElement) {
    const element = el;

    if (element.valueAsNumber > 0) {
      element.valueAsNumber -= 1;
    }
    console.log(element.id, element.value);
  }

  finishCart() {
    this.sendOrder = !this.sendOrder;
  }

  openComparativeModal(item: Product) {
    const modalRef = this.modalService.open(ProductComparativeComponent, { size: 'xl', centered: true, scrollable: true });
    modalRef.componentInstance.item = item;
  }
}
