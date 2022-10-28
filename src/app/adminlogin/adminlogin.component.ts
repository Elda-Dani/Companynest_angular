import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  username=""
  password=""


  raedvalues=()=>{
    let data={
      "username":this.username,
  "password":this.password
    }
    console.log(data)
    if (this.username=="admin" && this.password=="admin123") {

      alert("Login Successfully")
      this.myrouter.navigate(["/employeereg"])
      
    } else {
      alert("Invalid Credentials")
      this.username=""
      this.password=""
      
    }

  }

  ngOnInit(): void {
  }

}
