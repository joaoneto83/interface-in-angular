import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

@Component({
  selector: 'elgin-effective-commission-modal',
  templateUrl: './effective-commission-modal.component.html',
  styleUrls: ['./effective-commission-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EffectiveCommissionModalComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  clients = ['a', 'b', 'c'];

  commission = [
    { sap: '6000202270', customer: 'Refrisul Comercio de Peças PA (1213232151)', nf: '0211218458484', base: '0,00', total: 'R$ 140.645,385,97', totalCommission: '1,02', comission: '1,02', status: 'aprovado' },
    { sap: '6000202270', customer: 'Refrisul Comercio de Peças PA (1213232151)', nf: '0211218458484', base: '0,00', total: 'R$ 140.645,385,97', totalCommission: '1,02', comission: '1,02', status: 'em aprovação' },
    { sap: '6000202270', customer: 'Refrisul Comercio de Peças PA (1213232151)', nf: '0211218458484', base: '0,00', total: 'R$ 140.645,385,97', totalCommission: '1,02', comission: '1,02', status: 'em atraso' },
    { sap: '6000202270', customer: 'Refrisul Comercio de Peças PA (1213232151)', nf: '0211218458484', base: '0,00', total: 'R$ 140.645,385,97', totalCommission: '1,02', comission: '1,02', status: 'futuras' },
  ];

  constructor(public activeModal: NgbActiveModal) { }

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

}
