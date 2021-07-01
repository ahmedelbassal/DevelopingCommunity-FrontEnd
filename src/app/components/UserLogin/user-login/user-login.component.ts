import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    for(let item of this.StringInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    for(let item of this.NumerInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.max),Validators.minLength(item.min)]))
    }
  }


  subscriber:any;

  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"FirstName",maxLength:20,minLength:3,IsRequired:true},
    {name:"LastName",maxLength:20,minLength:3,IsRequired:true},
    {name:"UserName",maxLength:25,minLength:5,IsRequired:true},
    {name:"Password",maxLength:30,minLength:7,IsRequired:true},
    {name:"ConfPassword",maxLength:30,minLength:7,IsRequired:true}
  
  ]

  NumerInputNameValidation:Array<{name:string,IsRequired:boolean,max:number,min:number}>=[
    {name:"Age",max:90,min:10,IsRequired:true}
  ]

  // registerForm = this.fb.group({
  //   Email:["",Validators.required,Validators.email],
  //   Phone:["",Validators.required,Validators.pattern("[0-9 ]{11}")],
  //   Age:["",Validators.required,Validators.max(90),Validators.min(10)],
  // })

 
  registerForm = new FormGroup({
    Email:new FormControl("",[Validators.required,Validators.email]),
    Phone:new FormControl("",[Validators.required,Validators.pattern("[0-9 ]{11}")]),
  })


  submitForm(){

    let FirstName=this.registerForm.get("FirstName")?.value;
    let LastName=this.registerForm.get("LastName")?.value;
    let Age=this.registerForm.get("Age")?.value;
    let UserName=this.registerForm.get("FirstName")?.value;
    let Password=this.registerForm.get("Password")?.value;
    let ConfPassword=this.registerForm.get("ConfPassword")?.value;
    let Email=this.registerForm.get("Email")?.value;
    let Phone=this.registerForm.get("Phone")?.value;

  
    let registerDetails={
      FirstName,LastName,Age,UserName,Password,ConfPassword,Email,Phone
    }

  //  console.log(registerDetails)

    this.subscriber=this.userService.Register(registerDetails).subscribe(

      (data)=>{
        console.log(data)
      },
      (err)=>{
        console.log(err.message)
        console.log("errrr")
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )
  }

}
