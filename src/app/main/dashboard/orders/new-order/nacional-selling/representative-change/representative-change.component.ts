import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './representative-change.component.html',
  styleUrls: ['./representative-change.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RepresentativeChangeComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
