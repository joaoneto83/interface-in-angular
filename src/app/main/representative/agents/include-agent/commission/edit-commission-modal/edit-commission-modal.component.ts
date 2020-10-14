import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { dateMask } from 'src/shared/functions/form-functions';

@Component({
  selector: 'elgin-edit-commission-modal',
  templateUrl: './edit-commission-modal.component.html',
  styleUrls: ['./edit-commission-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class EditCommissionModalComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }
}
