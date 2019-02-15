import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../model/employee";

const employees: Array<Employee> = [
  new Employee(
    "Position1",
    "Name1",
    "LastName1",
    "+375292533233",
    "email@mail.ru",
    "password1",
    "password1"
  ),
  new Employee(
    "Position2",
    "Name2",
    "LastName2",
    "+375292533233",
    "email@mail.ru",
    "password2",
    "password2"
  ),
  new Employee(
    "Position3",
    "Name3",
    "LastName3",
    "+375292533233",
    "email@mail.ru",
    "password3",
    "password3"
  )
];

@Injectable()
export class EmployeeService {
  public ListEmployees: Array<Employee>;
  constructor() {
    this.ListEmployees = employees;
  }

  addEmployee(employee: Employee) {
    this.ListEmployees.push(employee);
  }
  deleteEmployee(employee:Employee){
    for (var i = 0; i < this.ListEmployees.length; i++){
      if (this.ListEmployees[i] === employee) {
        this.ListEmployees.splice(i, 1);
      }
    }
  }

}
