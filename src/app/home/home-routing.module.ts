import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
