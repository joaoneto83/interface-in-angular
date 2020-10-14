import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { dateMask } from 'src/shared/functions/form-functions';

import { representativesGoals } from 'src/shared/ObejctMock/data';

import { EffectiveCommissionModalComponent } from './effective-commission-modal/effective-commission-modal.component';

@Component({
  selector: 'elgin-commission-managerial',
  templateUrl: './commission-managerial.component.html',
  styleUrls: ['./commission-managerial.component.scss']
})
export class CommissionManagerialComponent implements OnInit {

  representativesGoals: any[];

  date: Date;
  clients = ['a', 'b', 'c'];

  advancedPieChartView: number[] = [1264, 220];
  advancedPieChartScheme = { domain: ['#FE0D64', '#FFE070', '#4BD37B', '#0063AF', '#4DB2FF'] };

  constructor(private modalService: NgbModal) {
    Object.assign(this, { representativesGoals });
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

  openEffectiveCommissionModal() {
    this.modalService.open(EffectiveCommissionModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
}
