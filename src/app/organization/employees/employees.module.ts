import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EmployeesRoutingModule } from "./employees-routing.module";
import { EmployeesComponent } from "./employees.component";
import { AllEmployeesComponent } from "./all-employees/all-employees.component";
import { AddEmployeesComponent } from "./add-employees/add-employees.component";
import { ManagementEmployeesComponent } from "./management-employees/management-employees.component";
import { EmployeeService } from "./services/employees.service";
import { FormsModule } from "@angular/forms";
import { DialogComponent } from "src/app/dialog/dialog.component";

@NgModule({
  declarations: [
    EmployeesComponent,
    AllEmployeesComponent,
    AddEmployeesComponent,
    ManagementEmployeesComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService]
})
export class EmployeesModule {}
