import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsComponent } from './agents.component';
import { IncludeAgentComponent } from './include-agent/include-agent.component';

const routes: Routes = [
    {
        path: '', component: AgentsComponent,
        children: [
            { path: 'incluir', component: IncludeAgentComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentsRoutingModule { }
