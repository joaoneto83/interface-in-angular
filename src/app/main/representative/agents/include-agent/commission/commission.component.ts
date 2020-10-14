import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { dateMask } from 'src/shared/functions/form-functions';

import { EditCommissionModalComponent } from './edit-commission-modal/edit-commission-modal.component';

@Component({
  selector: 'elgin-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

  openEditCommissionModal() {
    this.modalService.open(EditCommissionModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
