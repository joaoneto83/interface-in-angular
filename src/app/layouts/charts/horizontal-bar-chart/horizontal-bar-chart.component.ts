import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'elgin-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalBarChartComponent {

  @Input() barChart: any[];

  @Input() view: number[] = [600, 100];

  // options for the chart
  @Input() showXAxis = true;
  @Input() showYAxis = true;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = true;
  @Input() autoScale = true;
  @Input() colorScheme = { domain: ['#4BD37B'] };
  @Input() showLabels = true;
  @Input() minXScaleValue = 1;
  @Input() maxXScaleValue = 100;
  @Input() showLegend = false;
  @Input() legendTitle = 'Legenda';
  @Input() legendPosition = 'right';
}
