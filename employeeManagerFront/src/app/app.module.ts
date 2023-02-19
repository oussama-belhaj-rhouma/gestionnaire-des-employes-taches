import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { TacheComponent } from './tache/tache.component';
import { LandingComponent } from './landing/landing.component';
import { TacheService } from './services/tache.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TacheComponent,
    LandingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
