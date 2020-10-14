import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { elginProducts } from 'src/shared/ObejctMock/products';

import { Product } from 'src/shared/models/products-model';

@Component({
  selector: 'elgin-multiple-product-modal',
  templateUrl: './multiple-product-modal.component.html',
  styleUrls: ['./multiple-product-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MultipleProductModalComponent implements OnInit {

  elginProducts: Product;

  isEdit = false;

  constructor(public activeModal: NgbActiveModal) {
    Object.assign(this, { elginProducts });
  }

  ngOnInit(): void {
    console.log(this.elginProducts);
  }

}
