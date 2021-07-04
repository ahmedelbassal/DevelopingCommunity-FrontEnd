import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';

@Component({
  selector: 'app-deactive-user-button',
  templateUrl: './deactive-user-button.component.html',
  styleUrls: ['./deactive-user-button.component.css']
})
export class DeactiveUserButtonComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService,private  router:Router) { }

  ngOnInit(): void {

    let userType=localStorage.getItem("devCommunityUserType");

    this.subscriber=this.userService.getMyDetailsByToken(userType).subscribe(
      (data:any)=>{
        // console.log(data)

        this.userId=data.id;
       
      },
      (err)=>{
        // console.log(err)

        this.router.navigateByUrl("user/login")
     
      },
      ()=>{
        this.subscriber.unsubscribe();
      })      

  }
  
  // userType:any;
  userId:any;

  subscriber:any;

  resonForDeactivation:string="";

  deactivatedSuccessfully:boolean=false;


  deactivate(){

   let confirmDeactivation=  confirm("ara you sure to activate your account temporarily");

    console.log(confirmDeactivation,this.resonForDeactivation);

    if(confirmDeactivation==false) return;

    let userType=localStorage.getItem("devCommunityUserType");

   this.subscriber= this.userService.deactivateUser(this.userId,userType).subscribe(
      (data)=>{
        // console.log(data)

        this.deactivatedSuccessfully=true;

        localStorage.removeItem("devCommunityToken")
        localStorage.removeItem("devCommunityUserType")
    

        setTimeout(() => {

          this.router.navigateByUrl("").then(
            ()=>{
              location.reload();
            }
          )
        }
        , 2500);

        
      },
      (err)=>{
        // console.log(err.error)

        console.log(err)


      },
      ()=>{
        this.subscriber.unsubscribe();
      } 
    )
  }
}
