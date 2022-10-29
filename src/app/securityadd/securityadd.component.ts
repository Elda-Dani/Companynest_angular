import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityadd',
  templateUrl: './securityadd.component.html',
  styleUrls: ['./securityadd.component.css']
})
export class SecurityaddComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  securitycode=""
  doj=""
  username=""
  password=""

  status:boolean=false


  readvalue=()=>{

    let data={
      "name":this.name,
  "securitycode":this.securitycode,
  "doj":this.doj,
  "username":this.username,
  "password":this.password
    }
    console.log(data)
    this.myapi.secuAdd(data).subscribe(
      (resp)=>{
        alert ("successfully added")
        this.name=""
        this.securitycode=""
        this.doj=""
        this.username=""
        this.password=""
        this.status=true
      }
    )
  }


  ngOnInit(): void {
  }

}
