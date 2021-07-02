import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name:string="default";

  @Input() options:Array<{DisplayMember:string,valueMember:any}>=[{DisplayMember:"viewMember",valueMember:1}];

  @Input() controllerName:string="depertId";

  @Input() FormOfInput:FormGroup=new FormGroup({
    defaultControl: new FormControl('', [Validators.nullValidator])
 
  })

}
