import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { e } from 'src/app/models/e';
import { ResponseViewModel } from 'src/app/models/response-view-model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css' ]
})
export class EmployeesComponent implements OnInit{
  employees:Employee[]=[];

  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {
   
  }
  
   employeesList(){
    this.employeeService.employeesList().subscribe(data => {
      this.employees = data;
    });
  }

}
