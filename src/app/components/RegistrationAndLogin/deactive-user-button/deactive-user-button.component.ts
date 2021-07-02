import { Component, OnInit } from '@angular/core';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';

@Component({
  selector: 'app-deactive-user-button',
  templateUrl: './deactive-user-button.component.html',
  styleUrls: ['./deactive-user-button.component.css']
})
export class DeactiveUserButtonComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService) { }

  ngOnInit(): void {

    let userType=localStorage.getItem("devCommunityUserType");

    this.subscriber=this.userService.getMyDetailsByToken(userType).subscribe(
      (data:any)=>{
        console.log(data)

        this.userId=data.id;
       
      },
      (err)=>{
        console.log(err)
     
      },
      ()=>{
        this.subscriber.unsubscribe();
      })      

  }
  
  userType:any;
  userId:any;

  subscriber:any;

  resonForDeactivation:string="";


  deactivate(){

   let confirmDeactivation=  confirm("ara you sure to activate your account temporarily");

    console.log(confirmDeactivation,this.resonForDeactivation);

    if(confirmDeactivation==false) return;

   this.subscriber= this.userService.deactivateUser(this.userId,this.userType).subscribe(
      (data)=>{
        console.log(data)
      },
      (err)=>{
        console.log(err.message)
      },
      ()=>{
        this.subscriber.unsubscribe();
      } 
    )
  }
}
