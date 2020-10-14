import { OrderInitComponent } from './order-init/order-init.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    NgbDatepickerModule,
    NgbDateParserFormatter,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgImageSliderModule } from 'ng-image-slider';

import { AngularDraggableModule } from 'angular2-draggable';

import { CustomDateParserFormatter } from 'src/shared/services/datepickeradapter.service';

import { FilterPipe } from 'src/shared/pipes/stores.pipe';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { NewFilterComponent } from './new-filter/new-filter.component';

import { RouterModule } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { NacionalSellingComponent } from './new-order/nacional-selling/nacional-selling.component';
import { RepresentativeChangeComponent } from './new-order/nacional-selling/representative-change/representative-change.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderComponent } from './new-order/nacional-selling/add-order/add-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ProductComparativeComponent } from './new-order/nacional-selling/add-order/product-comparative/product-comparative.component';
import { FinishOrderComponent } from './new-order/nacional-selling/add-order/finish-order/finish-order.component';

@NgModule({
    declarations: [
        OrderInitComponent,
        FilterPipe,
        InvoiceDetailComponent,
        NewFilterComponent,
        NewOrderComponent,
        NacionalSellingComponent,
        RepresentativeChangeComponent,
        OrderDetailsComponent,
        AddOrderComponent,
        ProductComparativeComponent,
        FinishOrderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        NgxPaginationModule,
        NgbNavModule,
        LayoutsModule,
        NgbTypeaheadModule,
        NgImageSliderModule,
        OrdersRoutingModule,
        NgbCollapseModule,
        AngularDraggableModule
    ],
    entryComponents: [
        InvoiceDetailComponent,
        NewFilterComponent,
        RepresentativeChangeComponent,
        OrderDetailsComponent
    ],
    providers: [
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
    ]
})
export class OrdersModule { }
