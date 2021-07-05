import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationTypeService } from 'src/app/services/organization-type.service';
import { OrganiztionService } from 'src/app/services/organiztion.service';

@Component({
  selector: 'app-add-organiztion',
  templateUrl: './add-organiztion.component.html',
  styleUrls: ['./add-organiztion.component.css']
})
export class AddOrganiztionComponent implements OnInit {

  constructor(private orgService:OrganiztionService,private orgTypesService:OrganizationTypeService,private router:Router) { }

  ngOnInit(): void {

    this.subscriber=this.orgTypesService.getAll().subscribe(

      (data:any)=>{
        // this.OrganizationOptions=data;

        let arr=[];

        for(let item of data){
          arr.push({DisplayMember:item["name"],valueMember:item["id"]})
        }

        this.OrganizationOptions=arr;

        console.log(data)
      },
      (err)=>{
        console.log(err.error)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )


    for(let item of this.StringInputNameValidation){
      this.organiztionForm.registerControl(item.name,new FormControl("",[item.IsRequired?Validators.required:Validators.nullValidator,Validators.maxLength(item.maxLength),Validators.minLength(item.minLength)]))
    }


  }

  subscriber:any;

  clicked:boolean=false;


  StringInputNameValidation:Array<{name:string,IsRequired:boolean,maxLength:number,minLength:number}>=[
    {name:"name",maxLength:30,minLength:3,IsRequired:true},
    {name:"website",maxLength:30,minLength:3,IsRequired:true},
    {name:"description",maxLength:100,minLength:5,IsRequired:true},
    {name:"address",maxLength:80,minLength:5,IsRequired:true},
    // {name:"Password",maxLength:30,minLength:7,IsRequired:true},
    // {name:"ConfPassword",maxLength:30,minLength:7,IsRequired:true}
  
  ]

  organiztionForm = new FormGroup({
    Email:new FormControl("",[Validators.required,Validators.email]),
    Phone:new FormControl("",[Validators.required,Validators.pattern("[0-9 ]{11}")]),
    organiztionTypeId:new FormControl("",Validators.nullValidator),
    PhotoUrl:new FormControl("",Validators.nullValidator)
  })



  organiztionDetails= {
    "name": "ITI",//
    "email": "iti@example.com",//
    "photoUrl": "data:image/png;base64,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",
    "phone": "01141505820",//
    "address": "maadi ",//
    "description": "training course",//
    "website": "https://www.iti.gov.eg/",//
    "organiztionTypeId": 0//
  }


 name:string="default";

  //  OrganizationOptions:Array<{DisplayMember:string,valueMember:any}>=[{DisplayMember:"viewMember",valueMember:1}];
   OrganizationOptions:any;


  // FormOfInput:FormGroup=new FormGroup({
  //   defaultControl: new FormControl('', [Validators.nullValidator])
 

  updatedSuccessfully:boolean=false;


  submitForm(){

    let name=this.organiztionForm.get("name")?.value;
    let email=this.organiztionForm.get("Email")?.value;
    let photoUrl=this.organiztionForm.get("PhotoUrl")?.value;
    let phone=this.organiztionForm.get("Phone")?.value;
    let address=this.organiztionForm.get("address")?.value;
    let description=this.organiztionForm.get("description")?.value;
    let website=this.organiztionForm.get("website")?.value;
    let organiztionTypeId=this.organiztionForm.get("organiztionTypeId")?.value;

    let organizationDetails= {
    "name": name,//
    "email": email,//
    "photoUrl": photoUrl,
    "phone": phone,//
    "address": address,//
    "description": description,//
    "website": website,//
    "organiztionTypeId": Number(organiztionTypeId)//
    }

    // console.log(organizationDetails);



    this.subscriber= this.orgService.addOne(organizationDetails).subscribe(

      (data)=>{
        console.log(data)

        this.updatedSuccessfully=true;
        setTimeout(() => {

          this.router.navigateByUrl("admin/dashboard");
        }
        , 2500);


      },
      (err)=>{
        console.log(err)
      },
      ()=>{
        this.subscriber.unsubscribe();

      }
    )


  }

}
