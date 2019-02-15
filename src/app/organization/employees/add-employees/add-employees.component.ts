import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee";
import { EmployeeService } from "../services/employees.service";
import { Router } from "@angular/router";

@Component({
  selector: "nopaper-add-employees",
  templateUrl: "./add-employees.component.html",
  styleUrls: ["./add-employees.component.css"]
})
export class AddEmployeesComponent implements OnInit {
  public employee: Employee;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = {
      Position: "",
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Email: "",
      Password: "",
      ConfirmPassword: ""
    };
  }
  addEmployee() {
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["organization/employees/all"]);
  }
}
