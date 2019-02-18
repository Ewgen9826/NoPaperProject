import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee";
import { EmployeeService } from "../services/employees.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";

@Component({
  selector: "nopaper-add-employees",
  templateUrl: "./add-employees.component.html",
  styleUrls: ["./add-employees.component.css"]
})
export class AddEmployeesComponent implements OnInit {
  public employee: Employee;
  private id: number;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.employee = {
      Id: 0,
      Position: "",
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Email: "",
      Password: "",
      ConfirmPassword: ""
    };
    this.activeRouter.params.subscribe(params => (this.id = params["id"]));
    if (this.id) {
      this.employee = this.employeeService.ListEmployees.map(data => {
        if (data.Id == this.id) {
          return data;
        }
      })[0];
    }
  }
  changeEmployee() {
    if (this.id) {
      this.updateEmployee(this.id);
    } else {
      this.addEmployee();
    }
  }
  addEmployee() {
    this.employee.Id = this.employeeService.ListEmployees.length + 1;
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["organization/employees/all"]);
    this.toastr.success(
      `${this.employee.FirstName} ${
        this.employee.LastName
      } успешно добавлен в систему`,
      "Управление сотрудниками",
      {
        timeOut: 5000,
        positionClass: "toast-bottom-right"
      }
    );
  }
  updateEmployee(id: number) {
    this.employeeService.ListEmployees[id] = this.employee;
    this.router.navigate(["organization/employees/all"]);
    this.toastr.info(
      `Сотрудник ${this.employee.FirstName} ${
        this.employee.LastName
      } был изменен`,
      "Управление сотрудниками",
      {
        timeOut: 5000,
        positionClass: "toast-bottom-right"
      }
    );
  }
}
