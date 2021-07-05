import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private userClient: HttpClient) { }

  // local url for run visual studio
  // baseUrl: string = "https://localhost:44347/api/admins/"


  baseUrl:string="https://developingcommunity-api.herokuapp.com"+"/api/admins/"


  Login(LoginDetails: any) {
    console.log(LoginDetails)


    return this.userClient.post(this.baseUrl+"login", LoginDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


}
