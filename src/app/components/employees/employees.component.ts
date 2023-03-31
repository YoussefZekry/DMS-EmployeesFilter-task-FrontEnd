import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css' ]
})
export class EmployeesComponent implements OnInit{

  constructor(private employeeService: EmployeeService, 
    private formBuilder: FormBuilder
    ){}

  employees:Employee[]=[];
  employee:Employee=new Employee();
  employeeFormGroup : FormGroup;
  
  initEmployeeForm() {
    this.employeeFormGroup = this.formBuilder.group({
      name:[''],
      code:[''],
      id: [''],
      department:[''],
      contractType:[''],
      status:[''],
      birthDate:[''],
      birthCity:[''],
      jobTitle:[''],
      directManager:['']
    });
  } 
  
  ngOnInit(): void {
   this.initEmployeeForm();
  }

  onSubmit(){
    this.employee.name = this.employeeFormGroup.value.name;
    this.employee.code = this.employeeFormGroup.value.code;
    this.employee.id = this.employeeFormGroup.value.id;
    this.employee.department = this.employeeFormGroup.value.department;
    this.employee.contractType = this.employeeFormGroup.value.contractType;
    this.employee.status = this.employeeFormGroup.value.status;
    this.employee.birthDate = this.employeeFormGroup.value.birthDate;
    this.employee.birthCity = this.employeeFormGroup.value.birthCity;
    this.employee.jobTitle = this.employeeFormGroup.value.jobTitle;
    this.employee.directManager = this.employeeFormGroup.value.directManager;
    this.employeeList();
  }

  employeeList(){
    this.employeeService.employeesList(this.employee).subscribe(data => {
      if (data.length<= 0){
        alert("employee not found");
      }
      else{
      this.employees = data;
      }        
      this.employeeFormGroup.reset();
    });
  }
}
