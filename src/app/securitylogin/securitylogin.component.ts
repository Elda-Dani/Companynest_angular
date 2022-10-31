import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }


  username=""
password=""

readValues=()=>{
  let data={
    "username":this.username,
    "password":this.password
  }
  console.log(data)
  this.myapi.secuLogin(data).subscribe(
    (resp:any)=>{
      if (resp.length>0) {
        localStorage.setItem("sec_id",resp[0].id)
        localStorage.setItem("sec_name",resp[0].name)
        console.log(localStorage.getItem("sec_id"));
this.myRouter.navigate(["/checkin"])
        
      } else {

        alert("Invalid credentials")
        
      }

    }
  )
}


  ngOnInit(): void {
  }

}
