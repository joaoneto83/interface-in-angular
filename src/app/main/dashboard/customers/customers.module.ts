import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbNavModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers.component';
import { IncludeCustomerComponent } from './include-customer/include-customer.component';
import { RegularCustomerComponent } from './include-customer/regular-customer/regular-customer.component';
import { VpcCustomerComponent } from './include-customer/vpc-customer/vpc-customer.component';
import { VpcCustomerDetailsModalComponent } from './include-customer/vpc-customer/vpc-customer-details-modal/vpc-customer-details-modal.component';
import { QueryCustomerComponent } from './query-customer/query-customer.component';
import { CustomerDetailModalComponent } from './customer-detail-modal/customer-detail-modal.component';
import { RegularCustomerDetailComponent } from './customer-detail-modal/regular-customer-detail/regular-customer-detail.component';
import { VpcCustomerDetailComponent } from './customer-detail-modal/vpc-customer-detail/vpc-customer-detail.component';
import { ApproveCustomerComponent } from './approve-customer/approve-customer.component';
import { rotas } from 'src/app/routes/app.routes';
import { CustomersServiceService } from './customers-service.service';

@NgModule({
    declarations: [
        CustomersComponent,
        IncludeCustomerComponent,
        RegularCustomerComponent,
        VpcCustomerComponent,
        VpcCustomerDetailsModalComponent,
        QueryCustomerComponent,
        CustomerDetailModalComponent,
        RegularCustomerDetailComponent,
        VpcCustomerDetailComponent,
        ApproveCustomerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        //CustomersRoutingModule,
        NgbNavModule,
        NgbTypeaheadModule,
        rotas
    ],
    exports: [CustomersComponent],
    entryComponents: [
        VpcCustomerDetailsModalComponent,
        CustomerDetailModalComponent
    ],
    providers:[CustomersServiceService]
})
export class CustomersModule { }
