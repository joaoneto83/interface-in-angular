import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

import { subLine, airConditioner } from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-sub-line',
  templateUrl: './sub-line.component.html',
  styleUrls: ['./sub-line.component.scss']
})
export class SubLineComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  clients = ['a', 'b', 'c'];

  subLine: any[];
  airConditioner: any[];

  groupedVerticalview: number[] = [1255, 350];
  groupedVerticallegendPosition = 'right';
  groupedVerticallegendTitle = 'Pedidos/Horas';
  groupedVerticalbarPadding = 10;
  groupedVerticalgroupPadding = 5;
  groupedVerticalcolorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B'] };

  pieGridView: number[] = [1210, 200];
  pieGridColorScheme = {
    domain: [
      '#0063AF', '#FFBC70', '#4DBF69', '#0091FF', '#FE0D64', '#66E8B1', '#FFE070', '#56CCF2'
    ]
  };

  constructor() {
    Object.assign(this, { subLine, airConditioner });
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

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

}
