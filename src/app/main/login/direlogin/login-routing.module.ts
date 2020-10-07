import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DireLoginComponent } from './login.component';



const routes: Routes = [{ path: '', component: DireLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireLoginRoutingModule { }
