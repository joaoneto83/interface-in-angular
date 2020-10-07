import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';




import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DireLoginComponent } from './login.component';

import { DireLoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    DireLoginComponent
    
  ],
  imports: [
    CommonModule,
    DireLoginRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [
    DireLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DireLoginModule { }
