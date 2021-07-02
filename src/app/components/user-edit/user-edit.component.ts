import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private userService:UserService,private departmentService:DepartmentService,private fb:FormBuilder) { }

  ngOnInit(): void {


    for(let item of this.StringInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }

    for(let item of this.NumerInputNameValidation){
      this.registerForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.max),Validators.minLength(item.min)]))
    }


    this.subscriber=this.userService.getMyDetailsByToken().subscribe(
      (data)=>{
        console.log(data)

        this.userDetials=data;

        this.registerForm.patchValue({
          FirstName:this.userDetials.firstName,
          LastName:this.userDetials.lastName,
          Email:this.userDetials.email,
          Phone:this.userDetials.phone,
          depertId:this.userDetials.departId,
          Age:this.userDetials.age
        })

       
      },
      (err)=>{
        console.log(err.message)
      },
      ()=>{
        this.subscriber.unsubscribe();
    
        this.subscriber=this.departmentService.getAll().subscribe(
          (data)=>{
            console.log(data)
            this.departmentsOptions=data;
          },
          (err)=>{
            console.log(err.massage)
          },
          ()=>{
            this.subscriber.unsubscribe();
          }
          )


      }
    )

   



  }

  
bgrb(){
  console.log(this.registerForm.controls.FirstName.validator)
}

StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
  {name:"FirstName",maxLength:20,minLength:3,IsRequired:true},
  {name:"LastName",maxLength:20,minLength:3,IsRequired:true},

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


  userDetials:any;
  subscriber:any;

  departmentsOptions:any;

  // registerForm=new FormGroup({
  //   FirstName:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
  //   LastName:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
  //   Email:new FormControl("",[Validators.required,Validators.email]),
  //   Phone:new FormControl("",[Validators.required,Validators.pattern("[0-9 ]{11}")]),
  //   depertId:new FormControl("",Validators.nullValidator),
  //   Age:new FormControl("",[Validators.required,Validators.min(10),Validators.max(90)])
  // })
  

}
