import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoProfileComponent } from './info-profile/info-profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


const routes: Routes = [
  { path: '', component: UserProfileComponent ,
    children: [
      { path:'infoProfile', component:InfoProfileComponent },
      { path:'AlterPass', component:RecoverPasswordComponent }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
