import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employees.service";
import { Employee } from "../model/employee";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "nopaper-management-employees",
  templateUrl: "./management-employees.component.html",
  styleUrls: ["./management-employees.component.css"]
})
export class ManagementEmployeesComponent implements OnInit {
  public isDialogShow = false;
  public nameEmployee: string;
  constructor(
    public employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  successRemove(employee: Employee) {
    this.isDialogShow = true;
    this.nameEmployee = `${employee.FirstName} ${employee.LastName}`;
  }

  removeEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee);
    this.isDialogShow = false;
    this.toastr.success(
      `${employee.FirstName} ${employee.LastName} успешно удален из системы`,
      "Управление сотрудниками",
      {
        timeOut: 5000,
        positionClass: "toast-bottom-right"
      }
    );
  }
}
