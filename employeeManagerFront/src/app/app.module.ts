import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee_admin/employee.component';
import { EmployeeService } from './services/employee.service';
import { TacheComponent } from './tache_admin/tache.component';
import { LandingComponent } from './landing/landing.component';
import { TacheService } from './services/tache.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {EmployeeModComponent} from './employee-mod/employee-mod.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import {httpInterceptorProviders} from './interceptor/intex';
import { ProfileComponent } from './profile/profile.component';
import { TacheModComponent } from './tache-mod/tache-mod.component';
import { TacheUserComponent } from './tache-user/tache-user.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TacheComponent,
    LandingComponent,
    EmployeeModComponent,
    EmployeeUserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TacheModComponent,
    TacheUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
