import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Order } from 'src/shared/models/order-model';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderDetail: Order;

  imageObject: Array<object> = [{
    image: '../../../../../assets/artefacts/nota-elginup.png',
    thumbImage: '../../../../../assets/artefacts/nota-elginup.png'
  }];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }
}
