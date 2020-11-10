import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartLegendComponent } from './charts/line-chart-legend/line-chart-legend.component';
import { GroupedVerticalChartComponent } from './charts/grouped-vertical-chart/grouped-vertical-chart.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { AdvancedPieChartComponent } from './charts/advanced-pie-chart/advanced-pie-chart.component';
import { InfoPopoverComponent } from './General/info-popover/info-popover.component';
import { MenuServiceService } from './side-menu/menu-service.service';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxChartsModule,
        RouterModule,
        Ng2SearchPipeModule
    ],
    declarations: [
        SideMenuComponent,
        LineChartComponent,
        PieChartComponent,
        VerticalBarChartComponent,
        NotificationsComponent,
        HorizontalBarChartComponent,
        LineChartLegendComponent,
        GroupedVerticalChartComponent,
        PieGridComponent,
        AdvancedPieChartComponent,
        InfoPopoverComponent
    ],
    exports: [
        SideMenuComponent,
        LineChartComponent,
        PieChartComponent,
        VerticalBarChartComponent,
        NotificationsComponent,
        HorizontalBarChartComponent,
        LineChartLegendComponent,
        GroupedVerticalChartComponent,
        PieGridComponent,
        InfoPopoverComponent,
        AdvancedPieChartComponent
    ],
    providers:[
        MenuServiceService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
