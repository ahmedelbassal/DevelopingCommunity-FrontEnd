import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    for(let item of this.StringInputNameValidation){
      this.loginForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    this.loginForm.registerControl("UserType",new FormControl("",Validators.nullValidator))

  }


  subscriber:any;

  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"UserName",maxLength:25,minLength:5,IsRequired:true},
    {name:"Password",maxLength:30,minLength:7,IsRequired:true},
  
  ]

 
  loginForm = new FormGroup({
  })


  


  submitForm(){

    let UserName=this.loginForm.get("UserName")?.value;
    let Password=this.loginForm.get("Password")?.value;

  
    let loginDetails={
     UserName,Password
    }


    this.subscriber=this.adminService.Login(loginDetails).subscribe(

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
        console.log(err.message)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )
  }

}
