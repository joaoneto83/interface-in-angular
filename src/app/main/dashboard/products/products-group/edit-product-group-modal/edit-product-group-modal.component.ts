import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'elgin-edit-product-group-modal',
  templateUrl: './edit-product-group-modal.component.html',
  styleUrls: ['./edit-product-group-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditProductGroupModalComponent implements OnInit {

  clients = [
    'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
  ];

  editItem = false;
  editGroup = false;
  desc = 'Ar Condicionado';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


}
