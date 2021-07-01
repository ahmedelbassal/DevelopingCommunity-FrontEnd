import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input-number',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.css']
})
export class FormInputNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name:string="default";
  @Input() max:number=20;
  @Input() min:number=3;
  @Input() IsRequired:boolean=true;


  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [Validators.nullValidator])
 
  })
  
}
