import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employees.service";
import { Employee } from "../model/employee";
@Component({
  selector: "nopaper-management-employees",
  templateUrl: "./management-employees.component.html",
  styleUrls: ["./management-employees.component.css"]
})
export class ManagementEmployeesComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {}

  removeEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee);
  }
}
