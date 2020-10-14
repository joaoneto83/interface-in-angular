import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AssistantsEditModalComponent } from './assistants-edit-modal/assistants-edit-modal.component';

@Component({
  selector: 'elgin-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss']
})
export class AssistantsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openAssistantsEditModal() {
    this.modalService.open(AssistantsEditModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
