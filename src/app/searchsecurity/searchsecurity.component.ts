import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  
  name=""

  readvalues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.secuSearch(data).subscribe(
      (res)=>{
        this.dataSearch=res
        this.name=""
      }
    )
  }


  editSec=()=>{
  this.myapi.secuEdit(this.dataSearch[0]).subscribe(
    (res)=>{
      alert ("successfully updated")
    }
  )
}


  dataSearch:any=[]

  ngOnInit(): void {
  }

}
