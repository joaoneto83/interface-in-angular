import { OrderInitComponent } from './order-init/order-init.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrderComponent } from './new-order/new-order.component';
import { NacionalSellingComponent } from './new-order/nacional-selling/nacional-selling.component';

const routes: Routes = [
    { path: '', component: OrderInitComponent },
    {
        path: 'novopedido', component: NewOrderComponent,
        children: [
            { path: 'vendanacional', component: NacionalSellingComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
