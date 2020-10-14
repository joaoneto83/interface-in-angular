import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elgin-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  @Input() data: any[];
  @Input() view: any[] = [500, 400];

  // options
  @Input() showLegend = true;
  @Input() showLabels = true;

  @Input() colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
