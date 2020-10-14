import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { RepresentativeRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './home/home.module';
import { ManagerHomeModule } from './manager-home/manager-home.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { AgentsModule } from './agents/agents.module';
import { CustomersModule } from './customers/customers.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    RepresentativeRoutingModule,
    HomeModule,
    ManagerHomeModule,
    OrdersModule,
    ProductsModule,
    AgentsModule,
    CustomersModule,
    ReportsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RepresentativeModule { }
