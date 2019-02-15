import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeesRoutingModule } from "./employees-routing.module";
import { EmployeesComponent } from "./employees.component";
import { AllEmployeesComponent } from "./all-employees/all-employees.component";
import { AddEmployeesComponent } from "./add-employees/add-employees.component";
import { ManagementEmployeesComponent } from "./management-employees/management-employees.component";
import { EmployeeService } from "./services/employees.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EmployeesComponent,
    AllEmployeesComponent,
    AddEmployeesComponent,
    ManagementEmployeesComponent
  ],
  imports: [CommonModule, EmployeesRoutingModule, FormsModule],
  providers: [EmployeeService]
})
export class EmployeesModule {}
