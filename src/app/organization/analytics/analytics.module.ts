import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";

import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { AnalyticsComponent } from "./analytics.component";
import { AttendanceAnalyticsComponent } from "./attendance-analytics/attendance-analytics.component";
import { FillingAnalyticsComponent } from "./filling-analytics/filling-analytics.component";
import { SubscriptionAnalyticsComponent } from "./subscription-analytics/subscription-analytics.component";
import { RevenueAnalyticsComponent } from "./revenue-analytics/revenue-analytics.component";

@NgModule({
  declarations: [
    AnalyticsComponent,
    AttendanceAnalyticsComponent,
    FillingAnalyticsComponent,
    SubscriptionAnalyticsComponent,
    RevenueAnalyticsComponent
  ],
  imports: [CommonModule, AnalyticsRoutingModule, ChartsModule]
})
export class AnalyticsModule {}
