import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private userClient:HttpClient) { }

  // local url for running visual studio
  // baseUrl: string = "https://localhost:44347/api/"

  baseUrl:string="https://developing-community-api.herokuapp.com"+"/api/"



  getAll(){

    return this.userClient.get(this.baseUrl+"Departments");
  }


  getById(id:number){

    return this.userClient.get(this.baseUrl+"Departments/"+id);
  }

  
}
