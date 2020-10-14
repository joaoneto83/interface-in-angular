import { Component, OnInit } from '@angular/core';

import { dateMask } from 'src/shared/functions/form-functions';

import { logistic, randomData } from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-revenues-general-dashboard',
  templateUrl: './revenues-general-dashboard.component.html',
  styleUrls: ['./revenues-general-dashboard.component.scss']
})
export class RevenuesGeneralDashboardComponent implements OnInit {

  date: Date;

  randomData: any[];

  pieView: number[] = [600, 350];

  pieColorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B', '#0063AF', '#4DB2FF'] };

  constructor() { Object.assign(this, { logistic, randomData }); }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }
}
