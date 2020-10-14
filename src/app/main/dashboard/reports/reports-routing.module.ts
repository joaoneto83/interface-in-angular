import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SellingComponent } from './selling/selling.component';
import { CommissionComponent } from './commission/commission.component';
import { GoalsComponent } from './goals/goals.component';
import { RevenuesComponent } from './revenues/revenues.component';

const routes: Routes = [
    {
        path: '', component: ReportsComponent,
        children: [
            { path: 'comissao', component: CommissionComponent },
            { path: 'vendas', component: SellingComponent },
            { path: 'metas', component: GoalsComponent },
            { path: 'faturamento', component: RevenuesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
