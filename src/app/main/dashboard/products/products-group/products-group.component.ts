import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditProductGroupModalComponent } from './edit-product-group-modal/edit-product-group-modal.component';

@Component({
  selector: 'elgin-products-group',
  templateUrl: './products-group.component.html',
  styleUrls: ['./products-group.component.scss']
})
export class ProductsGroupComponent implements OnInit {

  clients = [
    'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
  ];

  editItem = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  openEditProductGroupModal() {
    this.modalService.open(EditProductGroupModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
