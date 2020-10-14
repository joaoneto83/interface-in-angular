import { Component, OnInit } from '@angular/core';

import { dateMask } from 'src/shared/functions/form-functions';

import { horizontalBarChart, goalsAchieved, nacionalSelling, internacionalSelling } from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-goals-agents',
  templateUrl: './goals-agents.component.html',
  styleUrls: ['./goals-agents.component.scss']
})
export class GoalsAgentsComponent implements OnInit {

  date: Date;

  horizontalBarChart: any[];
  goalsAchieved: any[];
  nacionalSelling: any[];
  internacionalSelling: any[];

  horizontalBarChartView: number[] = [980, 100];

  groupedVerticalview: number[] = [1250, 350];
  groupedVerticallegendPosition = 'right';
  groupedVerticallegendTitle = 'Legenda';
  groupedVerticalbarPadding = 10;
  groupedVerticalgroupPadding = 5;
  groupedVerticalcolorScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B'] };

  pieView2: number[] = [632, 330];
  pieColorScheme = { domain: ['#FFE070', '#333333', '#0063AF', '#4BD37B', '#FE0D64', '#AFFF7D'] };

  constructor() { Object.assign(this, { horizontalBarChart, goalsAchieved, nacionalSelling, internacionalSelling }); }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }

}
