import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { elginProducts } from 'src/shared/ObejctMock/products';

import { Product } from 'src/shared/models/products-model';

@Component({
  selector: 'elgin-product-line-modal',
  templateUrl: './product-line-modal.component.html',
  styleUrls: ['./product-line-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ProductLineModalComponent implements OnInit {

  url = '';
  elginProducts: Product;
  isNewLine = false;

  constructor(public activeModal: NgbActiveModal) {
    Object.assign(this, { elginProducts });
  }

  ngOnInit(): void { }

  selectFile(event: any) {
    if (event.target.files) {

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }
}
