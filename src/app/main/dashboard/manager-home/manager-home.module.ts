import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CustomDateParserFormatter } from 'src/shared/services/datepickeradapter.service';

import { ManagerHomeRoutingModule } from './manager-home-routing.module';

import { LayoutsModule } from 'src/app/layouts/layouts.module';

import { ManagerHomeComponent } from './manager-home.component';
import { rotas } from 'src/app/routes/app.routes';

@NgModule({
  declarations: [
    ManagerHomeComponent
  ],
  imports: [
    CommonModule,
    //ManagerHomeRoutingModule,
    FormsModule,
    NgbDatepickerModule,
    LayoutsModule,
    NgxChartsModule,
    rotas
  ],
  exports: [
    ManagerHomeComponent
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
})
export class ManagerHomeModule { }
