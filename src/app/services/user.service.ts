import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient: HttpClient) { }

  baseUrl: string = "https://localhost:5001/api/individuals/"

  Register(RegisterDetails: any) {
    console.log(RegisterDetails)


    return this.userClient.post("https://localhost:44347/api/individuals/register", RegisterDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


  Login(LoginDetails: any) {
    console.log(LoginDetails)

    return this.userClient.post("https://localhost:44347/api/individuals/login", LoginDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


}
