import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name:string="default";
  @Input() clickedBefore:boolean=false;

  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [Validators.nullValidator])
  })
  

}
