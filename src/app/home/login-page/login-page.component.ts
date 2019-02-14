import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "nopaper-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  emailOrPhone: FormControl;
  password: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.emailOrPhone = new FormControl("", Validators.required);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
  }
  createForm() {
    this.loginForm = new FormGroup({
      emailOrPhone: this.emailOrPhone,
      password: this.password
    });
  }
  onSubmit() {
    if (this.loginForm.valid && this.emailOrPhone.value) {
      localStorage.setItem("currentUser", this.emailOrPhone.value);
      this.router.navigate(["organization"]);
    }
  }
}
