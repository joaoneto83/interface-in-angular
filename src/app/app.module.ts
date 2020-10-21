import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './main/login/login.module';
import { RepresentativeModule } from './main/dashboard/dashboard.module';
import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    NgbModule,
    LoginModule,
    RepresentativeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
