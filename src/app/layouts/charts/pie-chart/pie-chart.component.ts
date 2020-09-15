import { Component, Input } from '@angular/core';

@Component({
  selector: 'elgin-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() pieChart: any[];

  view: any[] = [170, 170];

  colorScheme = {
    domain: ['#FE0D64', '#0063AF', '#4BD37B', '#FFE070']
  };
}
