import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elgin-regular-customer',
  templateUrl: './regular-customer.component.html',
  styleUrls: ['./regular-customer.component.scss']
})
export class RegularCustomerComponent implements OnInit {

  juridicFisicExportModel = 'isJuridic';

  constructor() { }

  ngOnInit(): void { }

}
