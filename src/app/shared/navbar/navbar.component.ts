import { Component, OnInit, Input } from "@angular/core";
import { DisplayContentService } from "../services/display-content.service";
import { Router } from "@angular/router";
import { slideMenuLink, slideMenuAccount } from "../animations";

@Component({
  selector: "nopaper-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [slideMenuLink, slideMenuAccount]
})
export class NavbarComponent implements OnInit {
  @Input() isLogin: boolean;
  constructor(public display: DisplayContentService, private router: Router) {}
  public showMenuLink = false;
  public showMenuAccount = false;

  ngOnInit() {}
  get stateMenuLink() {
    return this.showMenuLink ? 'showMenuLink' : 'hideMenuLink'
  }
  get stateMenuAccount() {
    return this.showMenuAccount ? 'showMenuAccount' : 'hideMenuAccount'
  }

  toggleMenuAccount() {
    this.showMenuAccount = !this.showMenuAccount;
    if(this.showMenuLink){
      this.showMenuLink=false;
    }
  }
   toggleMenuLink() {
    this.showMenuLink = !this.showMenuLink;
     if(this.showMenuAccount){
      this.showMenuAccount=false;
    }
  }
  logout() {
    localStorage.removeItem("currentUser");
    const currentUser = localStorage.getItem("currentUser");
  }
}
