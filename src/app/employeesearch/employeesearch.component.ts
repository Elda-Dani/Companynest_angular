import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  name=""

  readvalues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.empSearch(data).subscribe(
      (res)=>{
        this.dataSearch=res
        this.name=""
      }
    )
  }


editEmp=()=>{
  this.myapi.empEdit(this.dataSearch[0]).subscribe(
    (res)=>{
      alert ("successfully updated")
    }
  )
}


  dataSearch:any=[]

  ngOnInit(): void {
  }

}
