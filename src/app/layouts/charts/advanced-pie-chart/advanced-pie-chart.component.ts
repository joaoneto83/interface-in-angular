import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'elgin-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvancedPieChartComponent implements OnInit {

  @Input() data: any[];
  @Input() view: any[] = [];

  // options
  @Input() gradient = false;
  @Input() showLegend = true;
  @Input() showLabels = true;
  @Input() isDoughnut = true;

  @Input() colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit(): void { }

}
