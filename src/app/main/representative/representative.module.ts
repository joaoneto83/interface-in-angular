import { OrdersModule } from './orders/orders.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentativeRoutingModule } from './representative-routing.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    RepresentativeRoutingModule,
    HomeModule,
    OrdersModule,
    LoginModule,
    ProductsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RepresentativeModule { }
