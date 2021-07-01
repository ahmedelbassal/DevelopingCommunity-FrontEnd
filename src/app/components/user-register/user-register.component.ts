import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService:UserService, private departmentService:DepartmentService,private Router:Router) { }

  ngOnInit(): void {

    for(let item of this.StringInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    for(let item of this.NumerInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.max),Validators.minLength(item.min)]))
    }

    this.subscriber=this.departmentService.getAll().subscribe(
      (data)=>{
        console.log(data)
        this.departmentsOptions=data;
      },
      (err)=>{
        console.log(err.message)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )

  }

  departmentsOptions:any;

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
    depertId:new FormControl("",Validators.nullValidator)
  })


  submitForm(){

    let FirstName=this.registerForm.get("FirstName")?.value;
    let LastName=this.registerForm.get("LastName")?.value;
    let Age=this.registerForm.get("Age")?.value;
    let UserName=this.registerForm.get("UserName")?.value;
    let Password=this.registerForm.get("Password")?.value;
    let ConfPassword=this.registerForm.get("ConfPassword")?.value;
    let Email=this.registerForm.get("Email")?.value;
    let Phone=this.registerForm.get("Phone")?.value;

    let depertId=this.registerForm.get("depertId")?.value;

    console.log(depertId)

    let registerDetails={
      FirstName,LastName,Age,UserName,Password,ConfPassword,Email,Phone,"departId":Number(depertId)
    }

 

    this.subscriber=this.userService.Register(registerDetails).subscribe(

      (data)=>{
        console.log(data)

        if(data=="Created successfully"){
          
          this.Router.navigateByUrl("user/login").then(
            ()=>{
              location.reload();
            }
          )
        }
      },
      (err)=>{
        console.log(err.message)
        console.log("errrr")
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )

    console.log(registerDetails)


 
  }

}
