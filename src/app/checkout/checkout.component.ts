import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.getCheckInData()
  }


  getCheckInData=()=>{
    this.myapi.viewCheckIn().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataCheck = resp;
        console.log(resp)
      }
      )
  }
  checkOut=(id:any)=>{
    let data = {
      "id":id,
      "logoutsec_id":localStorage.getItem('sec_id')
    }
    this.myapi.checkOut(data).subscribe()
    alert("Checked Out")
    this.getCheckInData()
  }

 
    
    displayedColumns: string[] = ['empid', 'logintime', 'update'];
    dataCheck :any =[]


  ngOnInit(): void {
  }

}
