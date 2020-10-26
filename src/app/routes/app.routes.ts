import { ApproveCustomerComponent } from './../main/dashboard/customers/approve-customer/approve-customer.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


/* Imports de components */
import { NotFoundComponent } from '../layouts/not-found/not-found.component';
import { AgentsComponent } from '../main/dashboard/agents/agents.component';
import { IncludeAgentComponent } from '../main/dashboard/agents/include-agent/include-agent.component';
import { CustomersComponent } from '../main/dashboard/customers/customers.component';
import { IncludeCustomerComponent } from '../main/dashboard/customers/include-customer/include-customer.component';
import { QueryCustomerComponent } from '../main/dashboard/customers/query-customer/query-customer.component';
import { HomeComponent } from '../main/dashboard/home/home.component';
import { ManagerHomeComponent } from '../main/dashboard/manager-home/manager-home.component';
import { NacionalSellingComponent } from '../main/dashboard/orders/new-order/nacional-selling/nacional-selling.component';
import { NewOrderComponent } from '../main/dashboard/orders/new-order/new-order.component';
import { OrderInitComponent } from '../main/dashboard/orders/order-init/order-init.component';
import { IncludeProductComponent } from '../main/dashboard/products/include-product/include-product.component';
import { LineStructureComponent } from '../main/dashboard/products/line-structure/line-structure.component';
import { ProductsGroupComponent } from '../main/dashboard/products/products-group/products-group.component';
import { ProductsPriceComponent } from '../main/dashboard/products/products-price/products-price.component';
import { ProductsComponent } from '../main/dashboard/products/products.component';
import { QueryProductComponent } from '../main/dashboard/products/query-product/query-product.component';
import { LoginComponent } from '../main/login/login.component';
import { ReportsComponent } from '../main/dashboard/reports/reports.component';
import { CommissionComponent } from '../main/dashboard/reports/commission/commission.component';
import { SellingComponent } from '../main/dashboard/reports/selling/selling.component';
import { GoalsComponent } from '../main/dashboard/reports/goals/goals.component';
import { RevenuesComponent } from '../main/dashboard/reports/revenues/revenues.component';
import { UserProfileComponent } from '../main/dashboard/user-profile/user-profile.component';
import { InfoProfileComponent } from '../main/dashboard/user-profile/info-profile/info-profile.component';
import { RecoverPasswordComponent } from '../main/dashboard/user-profile/recover-password/recover-password.component';
import { RoleGuard } from './role.guard';
import { AuthComponentComponent } from '../auth_component/auth-component/auth-component.component';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../main/login/auth.guard';

/*

 ROTAS DE TODOS OS COMPONENTES DA APLICAÇÃO 

 DATA CRIAÇÃO : 23/10/2020

*/

const APP_ROUTES : Routes = [

    { path:'', component:AuthComponentComponent , 
      canActivate:[AuthGuard],
      children:[
        { path: 'inicio' , component:HomeComponent },
        { path: 'inicio/gerente' , component:ManagerHomeComponent },
        { path: 'pedidos' ,
          component:OrderInitComponent , 
          children:[
            {
                path:'novopedido',
                component:NewOrderComponent,
                children:[ { path:'vendanacional', component:NacionalSellingComponent }]
            }]
        },
        {
            path:'produtos',
            component:ProductsComponent,
            children:[          
                    { path: 'incluir', component: IncludeProductComponent },
                    { path: 'consulta', component: QueryProductComponent },
                    { path: 'estruturadelinha', component: LineStructureComponent },
                    { path: 'gruposdeprodutos', component: ProductsGroupComponent },
                    { path: 'custodosprodutos', component: ProductsPriceComponent }
            ]
        },
        {
            path:'representantes',
            component:AgentsComponent,
            children:[{ path: 'incluir', component: IncludeAgentComponent }]
        },
        {
            path:'clientes',
            component:CustomersComponent,
            children:[
                { path: 'incluir', component: IncludeCustomerComponent },
                { path: 'consulta', component: QueryCustomerComponent },
                { path: 'aprovacao', component: ApproveCustomerComponent }
            ]
        },
        {
            path:'relatorios',
            component:ReportsComponent,
            children:[
                { path: 'comissao', component: CommissionComponent },
                { path: 'vendas', component: SellingComponent },
                { path: 'metas', component: GoalsComponent },
                { path: 'faturamento', component: RevenuesComponent }
            ]
        },
        {
            path:'perfil/:nomeUser',
            component:UserProfileComponent,
            
            children:[
                { path:'infoProfile', component:InfoProfileComponent },
                { path:'AlterPass', component:RecoverPasswordComponent }
            ]
        }
      ]
    },

    { path:'' , component:AppComponent ,
        children:[  
            { path: 'login' , component : LoginComponent }
         ]
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

export const rotas: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);