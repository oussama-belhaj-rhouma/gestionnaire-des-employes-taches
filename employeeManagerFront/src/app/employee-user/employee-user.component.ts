import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-user',
  templateUrl: './employee-user.component.html',
  styleUrls: ['./employee-user.component.css']
})
export class EmployeeUserComponent implements OnInit{
  title = 'employeemanagerapp';
  content?: string;
  constructor(private service :EmployeeService ){}

  public employees!: Employee[];
  public editEmployee!: Employee |null ;
  public deleteEmpoyee!: Employee | null;


  ngOnInit(): void {
      this.getEmployees();
  }

  public getEmployees(): void {
    this.service.getEmployees().subscribe(
      (      Response: Employee[])=>{
        this.employees=Response;
      }, 
      (error : HttpErrorResponse)=>{
        if (error.error) {
          try {
            const res = JSON.parse(error.error);
            this.employees = res.message;
          } catch {
            this.content = `Error with status: ${error.status} - ${error.statusText}`;
          }
        } else {
          this.content = `Error with status: ${error.status}`;
        }
      }
    );
  }
  

  public searchEmployees(key:string){
    const res : Employee[]=[];
    let employee1: Employee;
    for (employee1 of this.employees){
      if(employee1.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      employee1.email.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      employee1.phoneNumber.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      employee1.jobTitle.toLowerCase().indexOf(key.toLowerCase())!== -1 ){
        res.push(employee1);
      }
    }
      this.employees=res;
      if (res?.length==0 || !key){
        this.getEmployees();
      }
  }

  public onOpenModal(employee: Employee | null , mode: string): void {
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee=employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmpoyee=employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
  




}

