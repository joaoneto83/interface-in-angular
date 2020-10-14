import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'elgin-signup-seller-modal',
  templateUrl: './signup-seller-modal.component.html',
  styleUrls: ['./signup-seller-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupSellerModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
