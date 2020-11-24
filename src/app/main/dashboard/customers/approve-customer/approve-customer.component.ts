import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { client } from './../../../../../shared/ObejctMock/client';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';

@Component({
  selector: 'elgin-approve-customer',
  templateUrl: './approve-customer.component.html',
  styleUrls: ['./approve-customer.component.scss']
})
export class ApproveCustomerComponent implements OnInit {

  clients = ['1215151515000198', '2215151515000198'];
  isSelected: boolean;
  client: any;



  
  constructor(private modalService: NgbModal) {
    Object.assign(this, { client });
  }

  ngOnInit(): void { }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  openCustomerDetailsModal(e: Event) {
    e.stopImmediatePropagation();

    this.modalService.open(CustomerDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
