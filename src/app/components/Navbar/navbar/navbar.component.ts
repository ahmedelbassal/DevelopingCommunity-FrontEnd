import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService,private router:Router) { }

  ngOnInit(): void {

    let userType=localStorage.getItem("devCommunityUserType");

    this.subscriber=this.userService.getMyDetailsByToken(userType).subscribe(
      (data)=>{
        console.log(data)

        this.userDetials=data;

        this.loggedIn=true;

      },
      (err)=>{
        console.log(err)
     
      },
      ()=>{
        this.subscriber.unsubscribe();
    
       


      }
    )



  }

  subscriber:any;
  userDetials:any;
  loggedIn:boolean=false;


  navigateUserEditDetails(){
    this.router.navigateByUrl("user/edit")
  }

  navigateUserEditPassword(){
    this.router.navigateByUrl("user/password")
  }

  navigateUserDeactivate(){
    this.router.navigateByUrl("user/deactivate")
  }

}
