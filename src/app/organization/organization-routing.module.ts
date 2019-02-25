import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrganizationComponent } from "./organization.component";
import { AuthGuard } from "./services/auth-guard.service";
import { ClientsComponent } from "./clients/clients.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { EmployeesComponent } from "./employees/employees.component";
import { AllEmployeesComponent } from "./employees/all-employees/all-employees.component";
import { AddEmployeesComponent } from "./employees/add-employees/add-employees.component";
import { ManagementEmployeesComponent } from "./employees/management-employees/management-employees.component";
import { SettingsComponent } from "./settings/settings.component";
import { GeneralSettingsComponent } from "./settings/general-settings/general-settings.component";
import { DescriptionSettingsComponent } from "./settings/description-settings/description-settings.component";
import { ServicesSettingsComponent } from "./settings/services-settings/services-settings.component";
import { ContactSettingsComponent } from "./settings/contact-settings/contact-settings.component";
import { ImagesSettingsComponent } from "./settings/images-settings/images-settings.component";
import { SubscriptionSettingsComponent } from "./settings/subscription-settings/subscription-settings.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { AttendanceAnalyticsComponent } from "./analytics/attendance-analytics/attendance-analytics.component";
import { FillingAnalyticsComponent } from "./analytics/filling-analytics/filling-analytics.component";
import { SubscriptionAnalyticsComponent } from "./analytics/subscription-analytics/subscription-analytics.component";
import { RevenueAnalyticsComponent } from "./analytics/revenue-analytics/revenue-analytics.component";

const routes: Routes = [
  {
    path: "organization",
    component: OrganizationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "employees",
        component: EmployeesComponent,
        data: { animation: "isEmployees" },
        children: [
          {
            path: "all",
            component: AllEmployeesComponent
          },

          {
            path: "add",
            component: AddEmployeesComponent
          },

          {
            path: "management",
            component: ManagementEmployeesComponent
          },
          {
            path: "update/:id",
            component: AddEmployeesComponent
          },
          {
            path: "**",
            redirectTo: "all"
          }
        ]
      },

      {
        path: "clients",
        component: ClientsComponent,
        data: { animation: "isClients" }
      },

      {
        path: "notifications",
        component: NotificationsComponent,
        data: { animation: "isNotifications" }
      },

      {
        path: "analytics",
        component: AnalyticsComponent,
        data: { animation: "isAnalytics" },
        children: [
          {
            path: "attendance",
            component: AttendanceAnalyticsComponent
          },
          {
            path: "filling",
            component: FillingAnalyticsComponent
          },
          {
            path: "subscription",
            component: SubscriptionAnalyticsComponent
          },
          {
            path: "revenue",
            component: RevenueAnalyticsComponent
          },
          {
            path: "**",
            redirectTo: "attendance"
          }
        ]
      },

      {
        path: "settings",
        component: SettingsComponent,
        data: { animation: "isSettings" },
        children: [
          {
            path: "general",
            component: GeneralSettingsComponent
          },
          {
            path: "description",
            component: DescriptionSettingsComponent
          },
          {
            path: "services",
            component: ServicesSettingsComponent
          },
          {
            path: "contact",
            component: ContactSettingsComponent
          },
          {
            path: "subscription",
            component: SubscriptionSettingsComponent
          },
          {
            path: "images",
            component: ImagesSettingsComponent
          },
          {
            path: "**",
            redirectTo: "general"
          }
        ]
      },
      {
        path: "**",
        redirectTo: "employees"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule {}
