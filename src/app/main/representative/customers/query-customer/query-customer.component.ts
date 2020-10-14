import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';


@Component({
  selector: 'elgin-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {

  clients = ['1215151515000198', '2215151515000198'];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  openCustomerDetailModal() {
    this.modalService.open(CustomerDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
