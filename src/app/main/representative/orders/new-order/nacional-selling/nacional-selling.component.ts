import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RepresentativeChangeComponent } from './representative-change/representative-change.component';

import { representatives } from './representatives';

@Component({
  selector: 'elgin-nacional-selling',
  templateUrl: './nacional-selling.component.html',
  styleUrls: ['./nacional-selling.component.scss']
})
export class NacionalSellingComponent implements OnInit, OnDestroy {

  selectedItem: number;
  representatives: any[];
  customFilter: any;
  index = 1;
  representativeChosen = false;

  clients = [
    'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
  ];

  constructor(private modalService: NgbModal) {
    Object.assign(this, { representatives });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term === '' ? {} :
          this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  navigate(index: number) {
    this.selectedItem = index;
  }

  representativeChange() {
    this.modalService.open(RepresentativeChangeComponent, { centered: true, scrollable: true });
  }

  return() {
    if (this.index === 2) {
      this.index = 1;
    }
    if (this.index === 3) {
      this.index = 2;
    }
  }

  selectClient() {
    this.index = 2;
  }

  includeOrder() {
    this.index = 3;
  }
}
