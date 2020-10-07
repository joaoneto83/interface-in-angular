import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../login/direlogin/login.module').then(m => m.DireLoginModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativeRoutingModule { }
