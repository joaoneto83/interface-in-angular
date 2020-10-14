import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { VpcCustomerDetailsModalComponent } from './vpc-customer-details-modal/vpc-customer-details-modal.component';

@Component({
  selector: 'elgin-vpc-customer',
  templateUrl: './vpc-customer.component.html',
  styleUrls: ['./vpc-customer.component.scss']
})
export class VpcCustomerComponent implements OnInit {

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

    openVpcCustomerDetailsModal() {
    this.modalService.open(VpcCustomerDetailsModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
