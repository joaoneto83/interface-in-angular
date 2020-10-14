import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

import { productsPerArea } from 'src/shared/ObejctMock/data';

@Component({
  selector: 'elgin-per-product',
  templateUrl: './per-product.component.html',
  styleUrls: ['./per-product.component.scss']
})
export class PerProductComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  clients = ['a', 'b', 'c'];

  productsPerArea: any[];


  horizontalBarChartView: number[] = [1260, 200];
  horizontalBarChartColorScheme = {
    domain: [
      '#FCA746', '#FFE070', '#4DBF69', '#0091FF', '#56CCF2', '#66E8B1', '#B87121', '#9444C5', '#120DFE'
    ]
  };
  horizontalBarChartlegendTitle = '';

  constructor() {
    Object.assign(this, { productsPerArea });
  }

  ngOnInit(): void { }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }
}
