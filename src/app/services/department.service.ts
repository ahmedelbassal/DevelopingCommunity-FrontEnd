import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private userClient:HttpClient) { }

  //  baseUrl:string=process.env.backendUrl+"/api/"

  baseUrl: string = "https://localhost:44347/api/"


  getAll(){

    return this.userClient.get(this.baseUrl+"Departments");
  }


  getById(id:number){

    return this.userClient.get(this.baseUrl+"Departments/"+id);
  }

  
}
