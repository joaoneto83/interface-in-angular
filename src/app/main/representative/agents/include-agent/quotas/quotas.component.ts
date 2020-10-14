import { Component, OnInit } from '@angular/core';

import { dateMask } from 'src/shared/functions/form-functions';

@Component({
  selector: 'elgin-quotas',
  templateUrl: './quotas.component.html',
  styleUrls: ['./quotas.component.scss']
})
export class QuotasComponent implements OnInit {

  date: Date;
  enableEditArea = false;

  constructor() { }

  ngOnInit(): void { }

  regex(e: any) {
    const input: HTMLInputElement = e.target;
    input.value = dateMask(input.value);
  }
}
