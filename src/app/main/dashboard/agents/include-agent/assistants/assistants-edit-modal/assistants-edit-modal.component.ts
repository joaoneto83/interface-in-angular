import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'elgin-assistants-edit-modal',
  templateUrl: './assistants-edit-modal.component.html',
  styleUrls: ['./assistants-edit-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AssistantsEditModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }

}
