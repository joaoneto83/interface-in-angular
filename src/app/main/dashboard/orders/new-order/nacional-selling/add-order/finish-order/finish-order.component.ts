import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

@Component({
  selector: 'elgin-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent implements OnInit {

  taxes = true;
  descounts = true;
  unitCalc = true;
  freight = true;

  isTransporter = true;
  isForClient = false;
  isDelivery = true;
  isWithdraw = false;

  clients = ['ALIANCA NAVEGACAO E LOG.LTDA. (02.427.026/0012-07)', '...'];

  filterTypes = [
    { value: 'transportadora' },
    { value: 'cliente' }
  ];

  withdrawalTypes = [
    { value: 'entrega' },
    { value: 'retirada' }
  ];

  baseDate: Date;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200), distinctUntilChanged(), map(term => term === '' ? {} :
      this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  formatter = (result: string) => result.toUpperCase();

  constructor() { }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

  colectType(selectedValue: string) {

    console.log('value is ', selectedValue);

    if (selectedValue === 'transportadora') {
      this.isTransporter = true;
      this.isForClient = false;
    }

    if (selectedValue === 'cliente') {
      this.isForClient = true;
      this.isTransporter = false;
    }
  }

  withdrawType(selectedValue: string) {

    console.log('value is ', selectedValue);

    if (selectedValue === 'entrega') {
      this.isDelivery = true;
      this.isWithdraw = false;
    }

    if (selectedValue === 'retirada') {
      this.isWithdraw = true;
      this.isDelivery = false;
    }
  }
}
