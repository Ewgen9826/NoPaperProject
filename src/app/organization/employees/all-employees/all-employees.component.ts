import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employees.service";

@Component({
  selector: "nopaper-all-employees",
  templateUrl: "./all-employees.component.html",
  styleUrls: ["./all-employees.component.css"]
})
export class AllEmployeesComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {}
}
