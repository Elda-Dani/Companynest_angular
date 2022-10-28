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

}
