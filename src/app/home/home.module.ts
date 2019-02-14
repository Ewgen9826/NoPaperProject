import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { DisplayContentService } from "../shared/services/display-content.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomePageComponent, RegisterPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DisplayContentService]
})
export class HomeModule {}
