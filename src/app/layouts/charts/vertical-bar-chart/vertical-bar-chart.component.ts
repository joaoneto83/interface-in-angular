import { Component, Input } from '@angular/core';

@Component({
  selector: 'elgin-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent {

  @Input() barChart: any[];
  @Input() view: number[] = [100, 130];
  @Input() legend: boolean;
  @Input() legendTitle = 'Legend';
  @Input() legendPosition = 'right';
  @Input() scheme = { domain: ['#4BD37B'] };
  @Input() showYAxis = true;
  @Input() showXAxis = false;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = false;
  @Input() showDataLabel = false;
  @Input() yAxisLabel = '';
  @Input() autoScale = true;
  @Input() showLabels = true;
  @Input() minYScaleValue = 1;
  @Input() maxYScaleValue = 100;
  @Input() barPadding = 10;
}
