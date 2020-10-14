import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'elgin-order-types-modal',
  templateUrl: './order-types-modal.component.html',
  styleUrls: ['./order-types-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderTypesModalComponent implements OnInit {

  isExportSelected: boolean;
  isServiceSellingSelected: boolean;
  isContractSelected: boolean;
  isSellingSelected: boolean;
  isDistReqSelected: boolean;
  isDevolutionSelected: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
