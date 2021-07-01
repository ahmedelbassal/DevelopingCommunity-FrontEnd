import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private userClient:HttpClient) { }


  getAll(){

    return this.userClient.get("https://localhost:44347/api/Departments");
  }
}
