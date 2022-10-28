import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.empView().subscribe(
      (data)=>{
        this.employeeData=data
      }
    )
  }
  
  
  deleteEmp=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.empDelete(data).subscribe(
    (response)=>{
      alert ("Deleted Successfully")
    }
  )
  
  this.fetchData()
  
  }
  
  employeeData:any=[]


  ngOnInit(): void {
  }

}
