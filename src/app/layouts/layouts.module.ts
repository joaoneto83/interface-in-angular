import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxChartsModule,
    ],
    exports: [
        SideMenuComponent,
        LineChartComponent,
        PieChartComponent,
        VerticalBarChartComponent,
        NotificationsComponent
    ],
    declarations: [
        SideMenuComponent,
        LineChartComponent,
        PieChartComponent,
        VerticalBarChartComponent,
        NotificationsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
