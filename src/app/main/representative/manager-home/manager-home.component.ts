import { Component, OnInit, AfterViewInit } from '@angular/core';
import { dateMask } from 'src/shared/functions/form-functions';

import { horizontalBarChart, multi, comercial, credit, logistic, transport, wallet } from '../../../../shared/ObejctMock/data';

@Component({
  selector: 'elgin-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit, AfterViewInit {

  initDate: Date;
  endDate: Date;

  horizontalBarChart: any[];
  multi: any[];
  comercial: any[];
  credit: any[];
  logistic: any[];
  transport: any[];
  wallet: any[];

  view: number[] = [577, 200];
  horizontalBarChartView: number[] = [600, 100];
  elginVerticalBarChart: number[] = [500, 200];
  pieView: number[] = [477, 300];
  pieWalletView: number[] = [378, 300];
  legendPosition = 'right';
  legendTitle = 'pedidos';
  yAxisLabel = 'Pedidos';
  barPadding = 100;
  colorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B'] };
  pieColorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B', '#0063AF', '#4DB2FF'] };

  constructor() { Object.assign(this, { horizontalBarChart, multi, comercial, credit, logistic, transport, wallet }); }

  ngOnInit(): void { }

  ngAfterViewInit() { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }
}
