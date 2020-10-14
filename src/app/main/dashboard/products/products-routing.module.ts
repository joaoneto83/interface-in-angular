import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

import { IncludeProductComponent } from './include-product/include-product.component';
import { QueryProductComponent } from './query-product/query-product.component';
import { LineStructureComponent } from './line-structure/line-structure.component';
import { ProductsGroupComponent } from './products-group/products-group.component';
import { ProductsPriceComponent } from './products-price/products-price.component';

const routes: Routes = [
    {
        path: '', component: ProductsComponent,
        children: [
            { path: 'incluir', component: IncludeProductComponent },
            { path: 'consulta', component: QueryProductComponent },
            { path: 'estruturadelinha', component: LineStructureComponent },
            { path: 'gruposdeprodutos', component: ProductsGroupComponent },
            { path: 'custodosprodutos', component: ProductsPriceComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
