import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';
import { DepartmentService } from 'src/app/services/department.service';
import { IndividualService } from 'src/app/services/individual.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService, private departmentService:DepartmentService,private Router:Router) { }

  ngOnInit(): void {


    this.subscriber=this.departmentService.getAll().subscribe(
      (data:any)=>{

        let arr=[];
        for(let item of data){
         arr.push({DisplayMember:item["name"],valueMember:item["id"]})
        }
        this.departmentsOptions=arr;
        console.log(this.departmentsOptions)
      },
      (err)=>{
        console.log(err.message)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )

    for(let item of this.PasswordInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }


    for(let item of this.StringInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    for(let item of this.NumerInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.max),Validators.minLength(item.min)]))
    }

    

  }

  departmentsOptions:any;

  UserTypeOptions:Array<{DisplayMember:string,valueMember:any}>=[
    {DisplayMember:"instructor",valueMember:"instructor"},
    {DisplayMember:"student",valueMember:"student"},
    {DisplayMember:"individual",valueMember:"individual"},
  ]
  
  

  subscriber:any;


  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"FirstName",maxLength:20,minLength:3,IsRequired:true},
    {name:"LastName",maxLength:20,minLength:3,IsRequired:true},
    {name:"UserName",maxLength:25,minLength:5,IsRequired:true},
    // {name:"Password",maxLength:30,minLength:7,IsRequired:true},
    // {name:"ConfPassword",maxLength:30,minLength:7,IsRequired:true}
  
  ]

  PasswordInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"Password",maxLength:30,minLength:7,IsRequired:true},
    {name:"ConfPassword",maxLength:30,minLength:7,IsRequired:true}
  
  ]

  clicked:boolean=false;

  passwordMatch:boolean=true;

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
    depertId:new FormControl("",Validators.nullValidator),
    UserType:new FormControl("",Validators.nullValidator)
  })


  submitForm(){

    this.clicked=true;


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

    if(Password!=ConfPassword) {
      this.passwordMatch=false;
      return;
    }

    if(this.registerForm.invalid==true){

      this.passwordMatch=true;
      return;
    }

    let registerDetails={
      FirstName,LastName,Age,UserName,Password,ConfPassword,Email,Phone,"departId":Number(depertId)
    }

    let userType=this.registerForm.get("UserType")?.value;
 
    //console.log(this.registerForm.get("UserType")?.value)

    console.log(userType)

    this.subscriber=this.userService.Register(registerDetails,userType).subscribe(

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
