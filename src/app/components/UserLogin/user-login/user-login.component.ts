import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndividualService } from 'src/app/services/individual.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:IndividualService,private router:Router) { }

  ngOnInit(): void {

    for(let item of this.StringInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

  }


  subscriber:any;

  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"UserName",maxLength:25,minLength:5,IsRequired:true},
    {name:"Password",maxLength:30,minLength:7,IsRequired:true},
  
  ]

 
  registerForm = new FormGroup({
  })


  submitForm(){

    let UserName=this.registerForm.get("UserName")?.value;
    let Password=this.registerForm.get("Password")?.value;

  
    let registerDetails={
     UserName,Password
    }

  //  console.log(registerDetails)

    this.subscriber=this.userService.Login(registerDetails).subscribe(

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
