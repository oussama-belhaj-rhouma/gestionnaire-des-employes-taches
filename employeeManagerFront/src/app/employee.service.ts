import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employee/all');
  }

  public addEmployee( e: Employee): Observable<Employee>{
      return this.http.post<Employee>('http://localhost:8080/employee/add', e);
  }
  public updateEmployee( e: Employee): Observable<Employee>{
      return this.http.put<Employee>('http://localhost:8080/employee/update', e);
  }
  public deleteEmployee( id : number): Observable<void> {
      return this.http.delete<void>(`http://localhost:8080/employee/delete/${id}`);
  }
}


