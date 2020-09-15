import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PaginationInstance } from 'ngx-pagination/dist/ngx-pagination.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { dateMask } from 'src/shared/functions/form-functions';

import { NewFilterComponent } from '../new-filter/new-filter.component';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

import { ordersData } from '../orders';
import { storesData } from '../stores';

import { Store } from 'src/shared/models/store-model';
import { Order } from 'src/shared/models/order-model';

@Component({
  selector: 'elgin-order-init',
  templateUrl: './order-init.component.html',
  styleUrls: ['./order-init.component.scss']
})

export class OrderInitComponent implements OnInit {

  timeoutHandler: any;

  storesData: Store[];
  ordersData: Order[];

  isSelected: boolean;
  customFilter: any;

  initDate: Date;
  endDate: Date;

  orderListQtd = Object.keys(ordersData).length;

  orderControls = [
    { title: 'visualizar 10 resultados por página', value: 10 },
    { title: 'visualizar 20 resultados por página', value: 20 }
  ];

  optionalConfig: any = {
    maxSize: 5,
    directionLinks: true,
    autoHide: true,
    responsive: true
  };

  config: PaginationInstance = {
    id: 'server',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {
    Object.assign(this, { ordersData, storesData });
  }

  ngOnInit(): void {
    this.customFilter = this.storesData[0].filter;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  selectType(e: any) {
    this.customFilter = e.target.value;
  }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

  onPageChange(numbers: number) {
    this.config.currentPage = numbers;
  }

  onPageBoundsCorrection(numbers: number) {
    this.config.currentPage = numbers;
  }

  jumpToPage(e: any) {
    const input = e.target.value;
    this.config.currentPage = input;
  }

  changePaginationSize(e: any) {
    const select = e.target.value;
    this.config.itemsPerPage = select;
  }

  openInvoiceDetailModal(order?: Order, e?: Event) {
    e.stopImmediatePropagation();

    const modalRef = this.modalService.open(InvoiceDetailComponent, { size: 'xl', centered: true, scrollable: true });
    modalRef.componentInstance.invoiceDetail = order;
  }

  openOrderDetailsModal(order?: any, e?: Event) {
    e.stopImmediatePropagation();

    const modalRef = this.modalService.open(OrderDetailsComponent, { size: 'xl', centered: true, scrollable: true });
    modalRef.componentInstance.orderDetail = order;
  }

  public openFilterAddModal() {
    this.modalService.open(NewFilterComponent, { centered: true, scrollable: true });
  }

  goToNewOrder() {
    this.router.navigate(['novopedido'], { relativeTo: this.route });
  }
}
