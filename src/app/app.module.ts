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
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SecurityaddComponent } from './securityadd/securityadd.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { EmployeenavComponent } from './employeenav/employeenav.component';
import { SecuritynavComponent } from './securitynav/securitynav.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewlogsComponent } from './viewlogs/viewlogs.component';
import { ViewlogByidComponent } from './viewlog-byid/viewlog-byid.component';
import { ViewleavebyidComponent } from './viewleavebyid/viewleavebyid.component';

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
},
{
  path:"employeeview",component:ViewemployeeComponent
},
{
  path:"securityadd",component:SecurityaddComponent
},
{
  path:"securitysearch",component:SearchsecurityComponent
},
{
path:"securityview",component:ViewsecurityComponent
},
{
  path:"employeelogin",component:EmployeeloginComponent
},
{
path:"securitylogin",component:SecurityloginComponent
},
{
  path:"applyleave",component:AddleaveComponent
},
{
  path:"viewleave",component:ViewleaveComponent
},
{
path:"checkin",component:CheckinComponent
},
{
path:"checkout",component:CheckoutComponent
},
{
  path:"viewlog",component:ViewlogsComponent
},
{
path:"viewlogbyid",component:ViewlogByidComponent
},
{
  path:"viewleavebyid",component:ViewleavebyidComponent
}





]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmployeeaddComponent,
    EmployeesearchComponent,
    TestingComponent,
    ViewemployeeComponent,
    SecurityaddComponent,
    SearchsecurityComponent,
    ViewsecurityComponent,
    LoginnavbarComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    EmployeenavComponent,
    SecuritynavComponent,
    AddleaveComponent,
    ViewleaveComponent,
    CheckinComponent,
    CheckoutComponent,
    ViewlogsComponent,
    ViewlogByidComponent,
    ViewleavebyidComponent
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
