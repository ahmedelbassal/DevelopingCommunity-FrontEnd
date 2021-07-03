import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'https://localhost:44347/api/Projects';

  constructor(private httpClient:HttpClient) { }

  GetProjects(){
    return this.httpClient.get(this.baseUrl+'/',{observe:'response'});
  }
  GetProjectById(_id:any){
    return this.httpClient.get(this.baseUrl+'/'+_id,{observe:'response'});
  }

}
