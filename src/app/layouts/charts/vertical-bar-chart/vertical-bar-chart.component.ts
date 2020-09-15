import { Component, Input } from '@angular/core';

@Component({
  selector: 'elgin-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent {

  @Input() barChart: any[];

  view: number[] = [100, 130];

  // options for the chart
  showYAxis = true;
  showXAxisLabel = true;
  autoScale = true;
  colorScheme = { domain: ['#4BD37B'] };
  showLabels = true;
  minYScaleValue = 1;
  maxYScaleValue = 100;
}
