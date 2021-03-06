import { TokenService } from './../../../_core/services/token.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { barChart, lineChart, pieChart } from '../../../../shared/ObejctMock/data';

@Component({
  selector: 'elgin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  barChart: any[];
  lineChart: any[];
  pieChart: any[];

  constructor(private router: Router,service:TokenService) {
    //console.log(service.getToken());
    Object.assign(this, { barChart, lineChart, pieChart });
    //console.log(this.router.url);
  }
}
