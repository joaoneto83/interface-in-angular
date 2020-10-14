import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbNavModule, NgbDatepickerModule, NgbDateParserFormatter, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomDateParserFormatter } from 'src/shared/services/datepickeradapter.service';

import { ReportsRoutingModule } from './reports-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

import { ReportsComponent } from './reports.component';
import { SellingComponent } from './selling/selling.component';
import { GeneralDashboardComponent } from './selling/general-dashboard/general-dashboard.component';
import { SubLineComponent } from './selling/sub-line/sub-line.component';
import { PhaseComponent } from './selling/phase/phase.component';
import { DailyComponent } from './selling/daily/daily.component';
import { PerProductComponent } from './selling/per-product/per-product.component';
import { CommissionComponent } from './commission/commission.component';
import { CommissionManagerialComponent } from './commission/commission-managerial/commission-managerial.component';
import {
  EffectiveCommissionModalComponent
} from './commission/commission-managerial/effective-commission-modal/effective-commission-modal.component';
import { CommissionAgentsComponent } from './commission/commission-agents/commission-agents.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsAgentsComponent } from './goals/goals-agents/goals-agents.component';
import { GoalsManagerialComponent } from './goals/goals-managerial/goals-managerial.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { RevenuesGeneralDashboardComponent } from './revenues/revenues-general-dashboard/revenues-general-dashboard.component';

@NgModule({
  declarations: [
    ReportsComponent,
    SellingComponent,
    GeneralDashboardComponent,
    SubLineComponent,
    PhaseComponent,
    DailyComponent,
    PerProductComponent,
    CommissionComponent,
    CommissionManagerialComponent,
    EffectiveCommissionModalComponent,
    CommissionAgentsComponent,
    GoalsComponent,
    GoalsAgentsComponent,
    GoalsManagerialComponent,
    RevenuesComponent,
    RevenuesGeneralDashboardComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    LayoutsModule,
    ReportsRoutingModule
  ],
  exports: [
    ReportsComponent,
    SellingComponent,
    CommissionComponent,
    GoalsComponent
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
  entryComponents: [
    EffectiveCommissionModalComponent
  ]
})
export class ReportsModule { }
