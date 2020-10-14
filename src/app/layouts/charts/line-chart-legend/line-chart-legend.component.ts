import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elgin-line-chart-legend',
  templateUrl: './line-chart-legend.component.html',
  styleUrls: ['./line-chart-legend.component.scss']
})
export class LineChartLegendComponent implements OnInit {

  @Input() multi: any[];

  view: any[] = [1300, 140];

  // options
  legend = true;
  legendTitle = '';
  legendPosition = 'right';
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  roundDomains = true;
  minYScaleValue = 1;
  maxYScaleValue = 100;

  colorScheme = { domain: ['#FE498B', '#107CCF', '#FCAC51', '#7aa3e5', '#a8385d', '#aae3f5'] };

  constructor() { }

  ngOnInit(): void { }
}
