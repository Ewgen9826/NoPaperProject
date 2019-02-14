import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationComponent } from "./organization.component";
import { ClientsComponent } from "./clients/clients.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { AuthGuard } from "./services/auth-guard.service";
import { EmployeesModule } from "./employees/employees.module";
import { SettingsModule } from "./settings/settings.module";
import { AnalyticsModule } from "./analytics/analytics.module";

@NgModule({
  declarations: [
    OrganizationComponent,
    ClientsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    EmployeesModule,
    SettingsModule,
    AnalyticsModule,
    BrowserAnimationsModule
  ],
  exports: [OrganizationComponent],
  providers: [AuthGuard]
})
export class OrganizationModule {}
