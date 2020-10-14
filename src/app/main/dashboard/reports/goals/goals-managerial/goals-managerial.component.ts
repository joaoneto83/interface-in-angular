import { Component, OnInit } from '@angular/core';

import { dateMask } from 'src/shared/functions/form-functions';

import { horizontalBarChart, goalsAchieved, productsPerArea } from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-goals-managerial',
  templateUrl: './goals-managerial.component.html',
  styleUrls: ['./goals-managerial.component.scss']
})
export class GoalsManagerialComponent implements OnInit {

  date: Date;

  horizontalBarChart: any[];
  goalsAchieved: any[];
  productsPerArea: any[];

  horizontalBarChartView: number[] = [980, 100];

  groupedVerticalview: number[] = [1250, 350];
  groupedVerticallegendPosition = 'right';
  groupedVerticallegendTitle = 'Legenda';
  groupedVerticalbarPadding = 10;
  groupedVerticalgroupPadding = 5;
  groupedVerticalcolorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B'] };

  multiHorizontalBarChartView: number[] = [1250, 200];
  horizontalBarChartColorScheme = {
    domain: [
      '#FCA746', '#FFE070', '#4DBF69', '#0091FF', '#56CCF2', '#66E8B1', '#B87121', '#9444C5', '#120DFE'
    ]
  };
  horizontalBarChartlegendTitle = '';

  constructor() { Object.assign(this, { horizontalBarChart, goalsAchieved, productsPerArea }); }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

}
