import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { DisplayContentService } from "./shared/services/display-content.service";
import { OrganizationModule } from "./organization/organization.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    OrganizationModule
  ],
  providers: [DisplayContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}