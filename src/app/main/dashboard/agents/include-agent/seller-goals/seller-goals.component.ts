import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

import { SignupSellerModalComponent } from './signup-seller-modal/signup-seller-modal.component';

@Component({
  selector: 'elgin-seller-goals',
  templateUrl: './seller-goals.component.html',
  styleUrls: ['./seller-goals.component.scss']
})
export class SellerGoalsComponent implements OnInit {

  clients = [
    'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
  ];

  date: Date;

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

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

  openSignupSellerModal() {
    this.modalService.open(SignupSellerModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
