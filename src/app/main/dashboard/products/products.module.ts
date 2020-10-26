import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { QueryProductComponent } from './query-product/query-product.component';
import { ProductDetailModalComponent } from './product-detail-modal/product-detail-modal.component';
import { IncludeProductComponent } from './include-product/include-product.component';
import { MultipleProductModalComponent } from './include-product/multiple-product-modal/multiple-product-modal.component';
import { ProductLineModalComponent } from './include-product/product-line-modal/product-line-modal.component';
import { OrderTypesModalComponent } from './order-types-modal/order-types-modal.component';
import { LineStructureComponent } from './line-structure/line-structure.component';
import { ProductsGroupComponent } from './products-group/products-group.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProductGroupModalComponent } from './products-group/edit-product-group-modal/edit-product-group-modal.component';
import { ProductsPriceComponent } from './products-price/products-price.component';
import { rotas } from 'src/app/routes/app.routes';


@NgModule({
  imports: [
    CommonModule,
    //ProductsRoutingModule,
    FormsModule,
    NgbTypeaheadModule,
    rotas
  ],
  declarations: [
    ProductsComponent,
    IncludeProductComponent,
    MultipleProductModalComponent,
    ProductDetailModalComponent,
    OrderTypesModalComponent,
    ProductLineModalComponent,
    QueryProductComponent,
    LineStructureComponent,
    ProductsGroupComponent,
    EditProductGroupModalComponent,
    ProductsPriceComponent
  ],
  exports: [
    ProductsComponent,
    IncludeProductComponent,
    QueryProductComponent,
    LineStructureComponent,
    ProductsGroupComponent,
    ProductsPriceComponent
  ],
  entryComponents: [
    MultipleProductModalComponent,
    ProductDetailModalComponent,
    OrderTypesModalComponent,
    ProductLineModalComponent,
    EditProductGroupModalComponent
  ]
})
export class ProductsModule { }

