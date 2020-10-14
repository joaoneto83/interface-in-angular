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
    path: 'inicio/gerente',
    loadChildren: () => import('./manager-home/manager-home.module').then(m => m.ManagerHomeModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'representantes',
    loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./reports/reports-routing.module').then(m => m.ReportsRoutingModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativeRoutingModule { }
