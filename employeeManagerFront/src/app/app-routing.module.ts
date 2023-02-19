import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LandingComponent } from './landing/landing.component';
import { TacheComponent } from './tache/tache.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'employee', component:EmployeeComponent},
  {path : 'tache', component: TacheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
