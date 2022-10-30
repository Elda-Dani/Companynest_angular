import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.secuView().subscribe(
      (data)=>{
        this.securityData=data
      }
    )
  }
  
  
  deleteSec=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.secuDelete(data).subscribe(
    (response)=>{
      alert ("Deleted Successfully")
    }
  )
  
  this.fetchData()
  
  }
  
  securityData:any=[]

  ngOnInit(): void {
  }

}
