import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.getLeaveData()
  }
  
  dataSource:any
  
  getLeaveData=()=>{
    this.myapi.viewLeaves().subscribe(
      (resp) =>{
        console.log("Entered")
        this.leaveData = resp;
        console.log(resp)
      }
      )
  }

  updateStatus=(id:any)=>{
    console.log(this.setStatus+id)
    let data = {
      "id":id,
      "status":this.setStatus
    }
    this.myapi.updateStatus(data).subscribe()
    alert("Updated successfully")
    this.getLeaveData()
  }
    
    displayedColumns: string[] = ['name', 'reason', 'duration', 'date','appdate','type','status'];
    leaveData:any
     
    setStatus :any



  ngOnInit(): void {
  }

}
