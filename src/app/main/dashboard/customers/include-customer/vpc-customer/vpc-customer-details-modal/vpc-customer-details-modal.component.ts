import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'elgin-vpc-customer-details',
  templateUrl: './vpc-customer-details-modal.component.html',
  styleUrls: ['./vpc-customer-details-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VpcCustomerDetailsModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
