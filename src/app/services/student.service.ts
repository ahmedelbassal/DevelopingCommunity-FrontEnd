import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private userClient: HttpClient) { }


  baseUrl: string = "https://localhost:44347/api/students/"

  Register(RegisterDetails: any) {
    console.log(RegisterDetails)


    return this.userClient.post(this.baseUrl+"register", RegisterDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


  Login(LoginDetails: any) {
    console.log(LoginDetails)

    return this.userClient.post(this.baseUrl+"login", LoginDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


  getMyDetailsByToken(){

    return this.userClient.get(this.baseUrl+"myDetails", {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("devCommunityToken")}`
      }), responseType: "json"
    });
  }

  updateDetails(details:any){

    console.log(details)


   

    return this.userClient.put(this.baseUrl+"details/1018",details,{
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("devCommunityToken")}`
      }), responseType: "json"
    });
  }

}
