import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/employees';
  constructor(private httpClient: HttpClient) {}

  employeesList(): Observable<Employee[]> {
    let employee = new Employee();
    // employee.name="Youssef Zekry"
    return this.httpClient.post<Employee[]>(`${this.baseURL}`, employee);
  }
}
