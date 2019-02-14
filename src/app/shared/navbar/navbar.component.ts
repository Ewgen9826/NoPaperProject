import { Component, OnInit, Input } from "@angular/core";
import { DisplayContentService } from "../services/display-content.service";
import { Router } from "@angular/router";
@Component({
  selector: "nopaper-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() isLogin: boolean;
  constructor(public display: DisplayContentService, private router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem("currentUser");
    const currentUser = localStorage.getItem("currentUser");
  }
}
