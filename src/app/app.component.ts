import { Component } from "@angular/core";
import { DisplayContentService } from "./shared/services/display-content.service";
import { AuthenticationService } from "./shared/services/authentication.service";

@Component({
  selector: "nopaper-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public display: DisplayContentService,
    public authService: AuthenticationService
  ) {}
}
