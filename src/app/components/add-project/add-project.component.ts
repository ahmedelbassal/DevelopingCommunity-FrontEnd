import { Component, OnInit } from '@angular/core';
declare var $: any;
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddNewProjectService } from './../../services/add-new-project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private projectService: AddNewProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadScript('../assets/js/select2.min.js');
    this.loadScript('../assets/js/tilt.jquery.min.js');
  }
  ngAfterViewInit() {}

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  projectForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Description: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
    ]),
    CodeUrl: new FormControl('', Validators.nullValidator),
    GitUserName: new FormControl('', Validators.nullValidator),
    RepoName: new FormControl('', Validators.nullValidator),
    YoutDubeUrl: new FormControl('', Validators.nullValidator),
    CodeView: new FormControl('', Validators.nullValidator),
  });

  subscriber: any;

  submitForm() {
    let Name = this.projectForm.get('Name')?.value;
    let Description = this.projectForm.get('Description')?.value;
    let CodeUrl = this.projectForm.get('CodeUrl')?.value;
    let GitUserName = this.projectForm.get('GitUserName')?.value;
    let RepoName = this.projectForm.get('RepoName')?.value;
    let YoutDubeUrl = this.projectForm.get('YoutDubeUrl')?.value;
    let CodeView = this.projectForm.get('CodeView')?.value || false;

    let registerDetails = {
      Name,
      Description,
      CodeUrl,
      GitUserName,
      RepoName,
      YoutDubeUrl,
      CodeView,
    };

    this.subscriber = this.projectService.Add(registerDetails).subscribe(
      (data) => {
        alert('Project added successfully');
        this.router.navigateByUrl('projects');
      },
      (err) => {
        alert('There was an error please review your inputed data');
      }
    );
  }
}
