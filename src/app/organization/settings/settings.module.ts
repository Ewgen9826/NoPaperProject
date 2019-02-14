import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./settings.component";
import { GeneralSettingsComponent } from "./general-settings/general-settings.component";
import { DescriptionSettingsComponent } from "./description-settings/description-settings.component";
import { ServicesSettingsComponent } from "./services-settings/services-settings.component";
import { ContactSettingsComponent } from "./contact-settings/contact-settings.component";
import { SubscriptionSettingsComponent } from "./subscription-settings/subscription-settings.component";
import { ImagesSettingsComponent } from "./images-settings/images-settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";

@NgModule({
  declarations: [
    SettingsComponent,
    GeneralSettingsComponent,
    DescriptionSettingsComponent,
    ServicesSettingsComponent,
    ContactSettingsComponent,
    SubscriptionSettingsComponent,
    ImagesSettingsComponent
  ],
  imports: [CommonModule, SettingsRoutingModule]
})
export class SettingsModule {}
