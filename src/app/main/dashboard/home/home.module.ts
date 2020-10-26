import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { rotas } from 'src/app/routes/app.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    //HomeRoutingModule,
    NgxChartsModule,
    LayoutsModule,
    NgbCarouselModule,
    rotas
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
