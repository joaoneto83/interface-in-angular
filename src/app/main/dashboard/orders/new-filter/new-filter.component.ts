import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'elgin-filter-add',
  templateUrl: './new-filter.component.html',
  styleUrls: ['./new-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewFilterComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }

}
