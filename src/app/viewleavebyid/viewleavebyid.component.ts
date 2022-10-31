import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleavebyid',
  templateUrl: './viewleavebyid.component.html',
  styleUrls: ['./viewleavebyid.component.css']
})
export class ViewleavebyidComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.getLeaveData()
  }

  dataSource:any

  getLeaveData=()=>{
    let data={
     "empid":localStorage.getItem("empid")
    }
    this.myapi.viewLeaveById(data).subscribe(
     (res)=>{
       console.log("Entered")
       this.leaveData=res;
       console.log(res)
     }
    )
   }
 
  
     
     displayedColumns: string[] = ['name', 'type', 'date', 'reason','appdate','duration','status'];

  leaveData:any=[]

  ngOnInit(): void {
  }

}
