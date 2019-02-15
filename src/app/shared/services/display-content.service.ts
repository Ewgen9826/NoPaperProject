import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class DisplayContentService {
  constructor(private router: Router) {}

  isDisplayFooter(): boolean {
    const url = this.router.url;
    if (url === "/login" || url === "/register") {
      return false;
    }
    return true;
  }

  isLoginPage(): boolean {
    if (this.router.url === "/login") {
      return false;
    }
    return true;
  }

  isRegisterPage(): boolean {
    if (this.router.url === "/register") {
      return false;
    }
    return true;
  }
}
