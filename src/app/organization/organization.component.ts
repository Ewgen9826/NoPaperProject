import { Component } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";
import { slider } from "./route-animations";
@Component({
  selector: "nopaper-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.css"],
  animations: [slider]
})
export class OrganizationComponent {
  constructor(public router: Router) {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
