import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  constructor(private userService:CommonsAmongAllUsersService, private departmentService:DepartmentService,private Router:Router) { }

  ngOnInit(): void {


    

    for(let item of this.PasswordInputNameValidation){
      this.editForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    let userType=localStorage.getItem("devCommunityUserType");


    this.subscriber=this.userService.getMyDetailsByToken(userType).subscribe(
      (data)=>{
        console.log(data)

        this.userDetials=data;

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

  PasswordInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"NewPassword",maxLength:30,minLength:7,IsRequired:true},
    {name:"ConfNewPassword",maxLength:30,minLength:7,IsRequired:true}
  
  ]


  editForm = new FormGroup({
  })


  clicked:boolean=false;

  passwordMatch:boolean=true;


  submitForm(){

    this.clicked=true;

    let NewPassword=this.editForm.get("NewPassword")?.value;
    let ConfNewPassword=this.editForm.get("ConfNewPassword")?.value;


    if(NewPassword!=ConfNewPassword) {
      this.passwordMatch=false;
      return;
    }

    if(this.editForm.invalid==true){

      this.passwordMatch=true;
      return;
    }

    // let id=this.editForm.get("depertId")?.value;


    let registerDetails={
      NewPassword,ConfNewPassword,id:this.userDetials.id
    }


    let userType=localStorage.getItem("devCommunityUserType");
 
    //console.log(this.editForm.get("UserType")?.value)

    console.log(userType)

    this.subscriber=this.userService.updatePassword(registerDetails,userType).subscribe(

      (data)=>{
        console.log(data)


        localStorage.removeItem("devCommunityToken")

        localStorage.removeItem("devCommunityUserType")


          this.Router.navigateByUrl("user/login").then(
            ()=>{
              location.reload();
            }
          )
        
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
