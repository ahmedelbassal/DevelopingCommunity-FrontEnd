import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadScript('../assets/js/select2.min.js');
    this.loadScript('../assets/js/tilt.jquery.min.js');    
    $('.js-tilt').tilt({
			scale: 1.1
		})
  }
  ngAfterViewInit(){
    $('.js-tilt').tilt({
			scale: 1.1
		})
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
