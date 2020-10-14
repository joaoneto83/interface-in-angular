import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from 'src/shared/models/products-model';

import { elginProducts } from '../../../../../shared/ObejctMock/products';

import { MultipleProductModalComponent } from './multiple-product-modal/multiple-product-modal.component';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';
import { OrderTypesModalComponent } from '../order-types-modal/order-types-modal.component';
import { ProductLineModalComponent } from './product-line-modal/product-line-modal.component';

@Component({
  selector: 'elgin-include-product',
  templateUrl: './include-product.component.html',
  styleUrls: ['./include-product.component.scss']
})
export class IncludeProductComponent implements OnInit {

  elginProducts: Product;
  selectedItem: number;
  routeId: number;
  productLine: any;
  selectedProduct: number;
  productType: any;
  productSelected: boolean;
  isMult = false;
  enableEditArea = false;

  url = '';

  constructor(private modalService: NgbModal) {
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
    this.url = this.productType.thumbnail;
    console.log(this.productType);
  }

  selectFile(event: any) {
    if (event.target.files) {

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }

  isMultiple() {
    this.isMult = !this.isMult;
  }

  openSimilarProductModal(e: any) {
    if (e.target.checked) {
      this.modalService.open(MultipleProductModalComponent, { size: 'xl', centered: true, scrollable: true });
    }
  }

  openProductDetailModal() {
    this.modalService.open(ProductDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }

  openOrderTypesModal() {
    this.modalService.open(OrderTypesModalComponent, { size: 'xl', centered: true, scrollable: true });
  }

  openAddProductLineModal() {
    this.modalService.open(ProductLineModalComponent, { size: 'lg', centered: true, scrollable: true });
  }
}
