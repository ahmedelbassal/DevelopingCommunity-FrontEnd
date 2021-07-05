import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationTypeService {

  constructor(private userClient:HttpClient) { }

 // local url for running visual studio
  // baseUrl: string = "https://localhost:44347/api/OrganizationTypes"

  baseUrl:string="https://developingcommunity-api.herokuapp.com"+"/api/OrganizationTypes"

 
   getAll(){
 
     return  this.userClient.get(this.baseUrl);
   }
 
}
