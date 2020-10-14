import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

import {
  subLine, faseChart, pieGridChart, productsPerArea, representativesGoals, nacionalSelling, internacionalSelling
} from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss']
})
export class GeneralDashboardComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  clients = ['a', 'b', 'c'];

  subLine: any[];
  faseChart: any[];
  pieGridChart: any[];
  productsPerArea: any[];
  representativesGoals: any[];
  nacionalSelling: any[];
  internacionalSelling: any[];

  groupedVerticalview: number[] = [1264, 350];
  groupedVerticallegendPosition = 'right';
  groupedVerticallegendTitle = 'Pedidos/Horas';
  groupedVerticalbarPadding = 10;
  groupedVerticalgroupPadding = 5;
  groupedVerticalcolorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B'] };

  horizontalBarChartView: number[] = [540, 200];
  horizontalBarChartColorScheme = {
    domain: [
      '#FCA746', '#FFE070', '#4DBF69', '#0091FF', '#56CCF2', '#66E8B1', '#B87121', '#9444C5', '#120DFE'
    ]
  };
  horizontalBarChartlegendTitle = '';

  pieView: number[] = [];
  pieView2: number[] = [632, 330];
  pieColorScheme = { domain: ['#FFE070', '#333333', '#0063AF', '#4BD37B', '#FE0D64', '#AFFF7D'] };

  pieGridView: number[] = [];
  pieGridColorScheme = { domain: ['#FFE070', '#333333', '#0063AF', '#4BD37B', '#FE0D64', '#AFFF7D'] };

  advancedPieChartView: number[] = [1264, 220];
  advancedPieChartScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B', '#0063AF', '#4DB2FF'] };

  constructor() {
    Object.assign(this, { subLine, faseChart, pieGridChart, productsPerArea, representativesGoals, nacionalSelling, internacionalSelling });
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
