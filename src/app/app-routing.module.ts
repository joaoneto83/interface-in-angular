
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from 'src/app/layouts/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/representative/representative.module').then(m => m.RepresentativeModule)
  },
  {
    path: 'login', 
    loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
