import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient:HttpClient) { }

  Register(details:any){

    return this.userClient.post("http://localhost:5001/user/register",details);
  }
}
