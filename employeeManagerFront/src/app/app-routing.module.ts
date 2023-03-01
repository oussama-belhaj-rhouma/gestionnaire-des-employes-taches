import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee_admin/employee.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TacheComponent } from './tache/tache.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { httpInterceptorProviders } from './interceptor/intex';
import { AppComponent } from './app.component';
import { EmployeeModComponent } from './employee-mod/employee-mod.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: LandingComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'profile', component:ProfileComponent},
  {path : 'tache', component: TacheComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'employeemod', component: EmployeeModComponent},
  {path : 'employeeuser', component: EmployeeUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]

})
export class AppRoutingModule { }
