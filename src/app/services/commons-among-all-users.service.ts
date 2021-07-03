import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsAmongAllUsersService {

  constructor(private userClient: HttpClient) { }

  baseUrl: string = "https://localhost:44347/api/"


  setBaseUrlOnUserType(UserType:string){
    
    let chosenUser;

    if(UserType=="individual") chosenUser="individuals/";
    if(UserType=="instructor") chosenUser="instructors/"
    if(UserType=="student") chosenUser="students/"
    
    console.log(chosenUser,"   aaa")
    return (this.baseUrl+chosenUser);
  }

  Register(RegisterDetails: any,userType:any) {
    // console.log(RegisterDetails)


    let requestUrl=this.setBaseUrlOnUserType(userType);

    console.log(requestUrl)

    return this.userClient.post(requestUrl+"register", RegisterDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


  Login(LoginDetails: any,userType:any) {
    console.log(LoginDetails)

    let requestUrl=this.setBaseUrlOnUserType(userType);

    return this.userClient.post(requestUrl+"login", LoginDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


  getMyDetailsByToken(userType:any){

    let requestUrl=this.setBaseUrlOnUserType(userType);
    

    return this.userClient.get(requestUrl+"myDetails", {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("devCommunityToken")}`
      }), responseType: "json"
    });
  }

  updateDetails(details:any,userType:any){

    console.log(details)

    let requestUrl=this.setBaseUrlOnUserType(userType);

    return this.userClient.put(requestUrl+"details/"+details.id,details,{
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("devCommunityToken")}`
      }), responseType: "json"
    });
  }


  updatePassword(newData:any,userType:any){

    console.log(newData)

    let requestUrl=this.setBaseUrlOnUserType(userType);

    return this.userClient.put(requestUrl+"password/"+newData.id,newData,{
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("devCommunityToken")}`
      }), responseType: "json"
    });
  }

  deactivateUser(userId:number,userType:any){

    let requestUrl=this.setBaseUrlOnUserType(userType);

    return this.userClient.delete(requestUrl+userId);
  

  }

}
