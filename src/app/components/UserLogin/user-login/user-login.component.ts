import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(
      params=>{
        if(params.notloggedIn=="true"){
          this.redirectedFromNotAuthorized=true;
        }
      }
    )


    

    for(let item of this.StringInputNameValidation){
      this.loginForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    this.loginForm.registerControl("UserType",new FormControl("",Validators.nullValidator))

    let userType=localStorage.getItem("devCommunityUserType");

    if(this.redirectedFromNotAuthorized==true){

      return;
    }


    this.subscriber=this.userService.getMyDetailsByToken(userType).subscribe(
      (data)=>{
        console.log(data)

        // this.userDetials=data;

        this.router.navigateByUrl("");

      },
      (err)=>{
        console.log(err)

        this.router.navigateByUrl("user/login?notloggedIn=true");

     
      },
      ()=>{
        this.subscriber.unsubscribe();

      }
    )

  }

  clicked:boolean=false;

  // in case user coming from route authorized and he is not logged in
  redirectedFromNotAuthorized:boolean=false;

  subscriber:any;

  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"UserName",maxLength:25,minLength:5,IsRequired:true},
    // {name:"Password",maxLength:30,minLength:7,IsRequired:true},
  
  ]

 
  loginForm = new FormGroup({
    Password:new FormControl("",[Validators.required,Validators.maxLength(25),Validators.minLength(5)])
  })


  UserTypeOptions:Array<{DisplayMember:string,valueMember:any}>=[
    {DisplayMember:"instructor",valueMember:"instructor"},
    {DisplayMember:"student",valueMember:"student"},
    {DisplayMember:"individual",valueMember:"individual"},
  ]
  

  invalidLoginData:boolean=false;

  submitForm(){

    let UserName=this.loginForm.get("UserName")?.value;
    let Password=this.loginForm.get("Password")?.value;

  
    let loginDetails={
     UserName,Password
    }

  //  console.log(registerDetails)

  let userType=this.loginForm.get("UserType")?.value;

    this.subscriber=this.userService.Login(loginDetails,userType).subscribe(

      (data:any)=>{
        console.log(data)

        localStorage.setItem("devCommunityToken",data?.token)

        localStorage.setItem("devCommunityUserType",data?.userType)

        this.router.navigateByUrl("").then(
          ()=>{
            location.reload();
          }
        )

      },
      (err)=>{
        console.log(err.error)

        if(err.error=="Username or password is invalid"){
          
        }
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )
  }

}
