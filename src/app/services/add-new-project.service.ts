import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddNewProjectService {
  constructor(private projectClient: HttpClient) {}

  baseUrl: string = 'https://developingcommunity-api.herokuapp.com/api/';

  Add(projectDetails: any) {
    return this.projectClient.post(this.baseUrl + 'projects', projectDetails, {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      responseType: 'json',
    });
  }
}
