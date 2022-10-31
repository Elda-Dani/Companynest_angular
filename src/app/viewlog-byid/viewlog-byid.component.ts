import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlog-byid',
  templateUrl: './viewlog-byid.component.html',
  styleUrls: ['./viewlog-byid.component.css']
})
export class ViewlogByidComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getLogData()
   }


  getLogData=()=>{
   let data={
    "empid":localStorage.getItem("empid")
   }
   this.myapi.vieLogById(data).subscribe(
    (res)=>{
      console.log("Entered")
      this.logData=res;
      console.log(res)
    }
   )
  }

 
    
    displayedColumns: string[] = ['name', 'logintime', 'loginsec_name', 'logouttime','logoutsec_name'];
    logData :any =[]
  ngOnInit(): void {
  }

}
