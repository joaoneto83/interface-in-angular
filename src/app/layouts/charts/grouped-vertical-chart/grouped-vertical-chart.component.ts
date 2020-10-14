import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elgin-grouped-vertical-chart',
  templateUrl: './grouped-vertical-chart.component.html',
  styleUrls: ['./grouped-vertical-chart.component.scss']
})
export class GroupedVerticalChartComponent implements OnInit {

  @Input() barChart: any[];
  @Input() view: number[] = [1264, 300];
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
  @Input() barPadding: number;
  @Input() groupPadding: number;

  constructor() { }

  ngOnInit(): void { }
}
