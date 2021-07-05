import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private userService: CommonsAmongAllUsersService,
    private router: Router
  ) {}

  subscriber: any;
  userDetials: any;
  loggedIn: boolean = false;
  
  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('devCommunityToken')? true : false;
    let userType = localStorage.getItem('devCommunityUserType');

    if(!userType)
      return;
      
    this.subscriber = this.userService.getMyDetailsByToken(userType).subscribe(
      (data) => {     
        
        this.userDetials = data;

        this.firstName=this.userDetials.firstName;       


        this.loggedIn = true;

        if(userType=="admin"){
          this.isAdmin=true;
        }
      },
      (err) => {
        console.log(err);       
      },
      () => {
        this.subscriber.unsubscribe();
      }
    );
  
  }

  firstName:string="";
  lastName:string="";

  isAdmin=false;

  logout(){    
    console.log("here")
    localStorage.removeItem("devCommunityToken");
    localStorage.removeItem("devCommunityUserType");
    // location.reload();
    this.router.navigateByUrl("").then(()=>{location.reload();})    
  }

  // navigateUserEditDetails() {
  //   this.router.navigateByUrl('user/edit');
  // }

  // navigateUserEditPassword() {
  //   this.router.navigateByUrl('user/password');
  // }

  // navigateUserDeactivate() {
  //   this.router.navigateByUrl('user/deactivate');
  // }
}
