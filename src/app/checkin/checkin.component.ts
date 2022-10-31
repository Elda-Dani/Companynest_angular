import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }

empid=""

checkIn=()=>{
let data={
  "empid":this.empid,
  "loginsec_id":localStorage.getItem('sec_id')
}

this.myapi.checkIn(data).subscribe()
this.empid=""
}


  ngOnInit(): void {
  }

}
