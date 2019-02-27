import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //const currentUser = this.authenticationService.currentUserValue;
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
