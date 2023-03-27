import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { e } from 'src/app/models/e';
import { ResponseViewModel } from 'src/app/models/response-view-model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css' ]
})
export class EmployeesComponent implements OnInit{
  employees:Employee[]=[];

  constructor(private _http:HttpClient){}
  ngOnInit(): void {
   
  }
  

  get():void{
    let employee = new Employee();
    employee.name="Youssef Zekry"
    this._http.post<ResponseViewModel>("http://localhost:8080/employees",employee)
    .subscribe(
      response=>{
          this.employees = response.body;
          console.log(response);
          console.log(this.employees);
          console.log("aaaa");
      },
      error=>{
        alert('error occurred');
      }
    );
  }

}
