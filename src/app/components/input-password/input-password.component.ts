import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() clickedBefore:boolean=false;

  inputType:string="password";

  @Input() name:string="default";
  @Input() maxLength:number=20;
  @Input() minLength:number=3;
  @Input() inputRegex:string="[A-za-z0–9_@]";
  Regex:RegExp=new RegExp(this.inputRegex);

  @Input() IsRequired:boolean=true;

  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [this.IsRequired? Validators.required:Validators.nullValidator, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
  })


  showHidePassword(){

   

    if(this.inputType=="password") { 
      
      this.inputType="text";

      return;
  }
    if(this.inputType=="text") 
    { this.inputType="password";
  
      return;
    }

    


  }

}
