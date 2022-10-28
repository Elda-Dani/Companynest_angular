import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  empcode=""
  designation=""
  doj=""
  username=""
  password=""



  readvalue=()=>{

    let data={
      "name":this.name,
  "empcode":this.empcode,
  "designation":this.designation,
  "doj":this.doj,
  "username":this.username,
  "password":this.password
    }
    console.log(data)
    this.myapi.empAdd(data).subscribe(
      (resp)=>{
        alert ("successfully added")
        this.name=""
        this.empcode=""
        this.designation=""
        this.doj=""
        this.username=""
        this.password=""
      }
    )
  }

  ngOnInit(): void {
  }

}
