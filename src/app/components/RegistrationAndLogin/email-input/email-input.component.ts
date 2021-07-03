import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() name:string="default";
  @Input() clickedBefore:boolean=false;

  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [Validators.nullValidator])
  })

}
