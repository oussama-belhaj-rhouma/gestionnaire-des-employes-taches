import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
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
  
  public onAddEmployee(form: NgForm){
     document.getElementById("add-employee-form")?.click();
     this.service.addEmployee(form.value).subscribe(
       (      Response: any) =>{
         this.getEmployees();
         console.log(Response);
         form.reset();
        },
         (error : HttpErrorResponse) => {alert(error.message) ;
           form.reset(); }
    )
  }

  public onUpdateEmployee(employee: Employee){
    this.service.updateEmployee(employee).subscribe(
      (Response: any) =>{
      console.log(Response);
       this.editEmployee=employee;
        this.getEmployees();
       },
       (error : HttpErrorResponse) => {alert(error.message)}
   )
 }

 public onDeleteEmployee( employeeId: any){
  this.service.deleteEmployee(employeeId).subscribe(
    (Response: any) =>{
    console.log(Response);
    this.getEmployees();
   },
     (error : HttpErrorResponse) => {alert(error.message)}
 )
}


}
