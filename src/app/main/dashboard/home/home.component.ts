import { Component } from '@angular/core';
import { barChart, lineChart, pieChart } from '../../../../shared/ObejctMock/data';

@Component({
  selector: 'elgin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  barChart: any[];
  lineChart: any[];
  pieChart: any[];

  constructor() {
    Object.assign(this, { barChart, lineChart, pieChart });
  }
}
