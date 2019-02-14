import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
