import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"employeeadd",component:EmployeeaddComponent
  },
  {
    path:"employeesearch",component:EmployeesearchComponent
  },
{
  path:"test",component:TestingComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmployeeaddComponent,
    EmployeesearchComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
