import { Component } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";
import { sliderAnimation } from "../animation";

@Component({
  selector: "nopaper-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.css"],
  animations: [sliderAnimation]
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
