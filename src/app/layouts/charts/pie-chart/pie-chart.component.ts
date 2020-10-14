import { Component, Input } from '@angular/core';

@Component({
  selector: 'elgin-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() pieChart: any[];
  @Input() view: any[] = [170, 170];
  @Input() colorScheme = { domain: ['#FE0D64', '#0063AF', '#4BD37B', '#FFE070'] };
  @Input() showLegend = false;
  @Input() showLabels = false;
  @Input() showsDoughnut = false;
}
