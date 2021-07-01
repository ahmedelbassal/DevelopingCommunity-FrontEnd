import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input-string',
  templateUrl: './form-input-string.component.html',
  styleUrls: ['./form-input-string.component.css']
})
export class FormInputStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    


  }

  @Input() name:string="default";
  @Input() maxLength:number=20;
  @Input() minLength:number=3;
  @Input() inputRegex:string="[A-za-z0–9_@]";
  Regex:RegExp=new RegExp(this.inputRegex);

  @Input() IsRequired:boolean=true;

  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [this.IsRequired? Validators.required:Validators.nullValidator, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
  })

}
