import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './product-comparative.component.html',
  styleUrls: ['./product-comparative.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComparativeComponent implements OnInit {
  @Input() item: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void { console.log(this.item); }

}
