import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { first } from "rxjs/operators";

@Component({
  selector: "nopaper-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  emailOrPhone: FormControl;
  password: FormControl;

  public testLogin = "Organization@mail.ru";
  public testPassword = "testing123";
  constructor(
    private router: Router //private authService: AuthenticationService
  ) {}

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
    if (this.loginForm.invalid) {
      return;
    }
    /*this.authService
      .login(this.emailOrPhone.value, this.password.value)
      .subscribe(data => {
        this.router.navigate(["/organization"]);
      },
        error => {
          console.log(error);
      });*/
    if (
      this.emailOrPhone.value === "Organization@mail.ru" &&
      this.password.value === "testing123"
    ) {
      localStorage.setItem("currentUser", "Organization@mail.ru");
      this.router.navigate(["/organization"]);
    }
  }
}
