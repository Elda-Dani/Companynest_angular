import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  empAdd=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }

  empSearch=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",data)
  }
  empEdit=(data:any)=>{
    return this.http.post("http://localhost:8080/updateemp",data)
  }

empView=()=>{
  return this.http.get("http://localhost:8080/viewemployee")
}
empDelete=(data:any)=>{
  return this.http.post("http://localhost:8080/deleteemployee",data)
}

secuAdd=(data:any)=>{
  return this.http.post("http://localhost:8080/addsecurity",data)
}

secuSearch=(data:any)=>{
  return this.http.post("http://localhost:8080/searchmodel",data)
}
secuEdit=(data:any)=>{
  return this.http.post("http://localhost:8080/editsecurity",data)
}

secuView=()=>{
  return this.http.get("http://localhost:8080/viewsecurity")
}
secuDelete=(data:any)=>{
  return this.http.post("http://localhost:8080/deletesecurity",data)
}

empLogin=(data:any)=>{
  return this.http.post("http://localhost:8080/emplogin",data)
}
secuLogin=(data:any)=>{
  return this.http.post("http://localhost:8080/securitylogin",data)
}


applyLeave=(data:any)=>{
  return this.http.post("http://localhost:8080/addLeave",data)
}

checkIn=(data:any)=>{
  return this.http.post("http://localhost:8080/checkIn",data)
}

checkOut=(data:any)=>{
  return this.http.post("http://localhost:8080/checkOut",data)
}
viewCheckIn=()=>{
  return this.http.get("http://localhost:8080/viewCheckIn")
}

viewLog=()=>{
return this.http.get("http://localhost:8080/viewAllLog")
}

}
