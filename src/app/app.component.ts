import { Component } from "@angular/core";
import { DisplayContentService } from "./shared/services/display-content.service";
import { AuthenticationService } from "./shared/services/authentication.service";
import { fadeAnimation } from "./animation";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "nopaper-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(
    public display: DisplayContentService,
    public authService: AuthenticationService,
    private toastr: ToastrService
  ) { }
  
  showSuccess() {
    this.toastr.success("Hello World!!", "Hello");
  }
}
