import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }



username=""
password=""

readValues=()=>{
  let data={
    "username":this.username,
    "password":this.password
  }
  console.log(data)
  this.myapi.empLogin(data).subscribe(
    (resp:any)=>{
      if (resp.length>0) {
        localStorage.setItem("empid",resp[0].id)
        console.log(localStorage.getItem("empid"));
        localStorage.setItem('empname',resp[0].name)
this.myRouter.navigate(["/applyleave"])
        
      } else {

        alert("Invalid credentials")
        
      }

    }
  )
}






  ngOnInit(): void {
  }

}
