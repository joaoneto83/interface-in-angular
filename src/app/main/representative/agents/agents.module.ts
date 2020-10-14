import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbNavModule, NgbTypeaheadModule, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomDateParserFormatter } from 'src/shared/services/datepickeradapter.service';

import { AgentsRoutingModule } from './agents-routing.module';
import { IncludeAgentComponent } from './include-agent/include-agent.component';
import { AgentsComponent } from './agents.component';
import { GeneralComponent } from './include-agent/general/general.component';
import { CommissionComponent } from './include-agent/commission/commission.component';
import { EditCommissionModalComponent } from './include-agent/commission/edit-commission-modal/edit-commission-modal.component';
import { AssistantsComponent } from './include-agent/assistants/assistants.component';
import { AssistantsEditModalComponent } from './include-agent/assistants/assistants-edit-modal/assistants-edit-modal.component';
import { QuotasComponent } from './include-agent/quotas/quotas.component';
import { GoalsComponent } from './include-agent/goals/goals.component';
import { SellerGoalsComponent } from './include-agent/seller-goals/seller-goals.component';
import { SignupSellerModalComponent } from './include-agent/seller-goals/signup-seller-modal/signup-seller-modal.component';
import { ResumeComponent } from './include-agent/resume/resume.component';

@NgModule({
    declarations: [
        AgentsComponent,
        IncludeAgentComponent,
        GeneralComponent,
        CommissionComponent,
        EditCommissionModalComponent,
        AssistantsComponent,
        AssistantsEditModalComponent,
        QuotasComponent,
        GoalsComponent,
        SellerGoalsComponent,
        SignupSellerModalComponent,
        ResumeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AgentsRoutingModule,
        NgbNavModule,
        NgbTypeaheadModule,
        NgbDatepickerModule,
    ],
    exports: [
        AgentsComponent,
        IncludeAgentComponent,
    ],
    providers: [
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
    ],
    entryComponents: [
        EditCommissionModalComponent,
        AssistantsEditModalComponent,
        SignupSellerModalComponent
    ]
})
export class AgentsModule { }
