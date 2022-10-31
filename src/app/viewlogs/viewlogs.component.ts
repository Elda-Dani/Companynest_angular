import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.component.html',
  styleUrls: ['./viewlogs.component.css']
})
export class ViewlogsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getLogData()
   }


  getLogData=()=>{
    this.myapi.viewLog().subscribe(
      (resp) =>{
        console.log("Entered")
        this.logData = resp;
        console.log(resp)
      }
      )
  }

 
    
    displayedColumns: string[] = ['name', 'logintime', 'loginsec_name', 'logouttime','logoutsec_name'];
    logData :any =[]

  ngOnInit(): void {
  }

}
