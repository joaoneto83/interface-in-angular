import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { IncludeCustomerComponent } from './include-customer/include-customer.component';
import { QueryCustomerComponent } from './query-customer/query-customer.component';
import { ApproveCustomerComponent } from './approve-customer/approve-customer.component';

const routes: Routes = [
    {
        path: '', component: CustomersComponent,
        children: [
            { path: 'incluir', component: IncludeCustomerComponent },
            { path: 'consulta', component: QueryCustomerComponent },
            { path: 'aprovacao', component: ApproveCustomerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomersRoutingModule { }
