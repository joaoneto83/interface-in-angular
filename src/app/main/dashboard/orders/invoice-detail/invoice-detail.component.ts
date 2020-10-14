import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Order } from 'src/shared/models/order-model';

@Component({
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InvoiceDetailComponent implements OnInit {

  @Input() invoiceDetail: Order;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.invoiceDetail);
  }

}
