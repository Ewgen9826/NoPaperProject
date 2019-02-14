import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthenticationService } from "./services/authentication.service";
import { JwtInterceptor } from "./services/jwt-interceptor";

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule {}
