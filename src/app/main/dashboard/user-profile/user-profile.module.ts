import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { InfoProfileComponent } from './info-profile/info-profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverPasswordService } from './recover-password/recover-password.service';
import { FormsModule } from '@angular/forms';
import { TokenService } from 'src/app/_core/services/token.service';



@NgModule({
  declarations: 
  [
   UserProfileComponent,
   InfoProfileComponent,
   RecoverPasswordComponent

  ],
  imports: [
    UserProfileRoutingModule,
    CommonModule,
    FormsModule
    
  ],
  exports:[UserProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[
    RecoverPasswordService,
    TokenService
  ]
})
export class UserProfileModule { }
