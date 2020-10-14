import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { dateMask } from 'src/shared/functions/form-functions';

@Component({
  selector: 'elgin-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  clients = [
    'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
  ];

  date: Date;

  constructor() { }

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
