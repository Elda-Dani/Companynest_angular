import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  type=""
  appdate=""
  date=""
  reason=""
  duration=""

applyLeave=()=>{
  let data={
    "empid":localStorage.getItem("empid"),
    "type":this.type,
    "appdate":this.appdate,
    "date":this.date,
    "reason":this.reason,
    "duration":this.duration
  }

  console.log(data)
  this.myapi.applyLeave(data).subscribe();
  alert("applied")
}

  ngOnInit(): void {
  }

}
