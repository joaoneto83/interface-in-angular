import { Component, Input } from '@angular/core';

@Component({
  selector: 'elgin-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Input() lineChart: any[];

  view: any[] = [720, 140];

  // options
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  roundDomains = true;

  colorScheme = { domain: ['#0063AF'] };
}
